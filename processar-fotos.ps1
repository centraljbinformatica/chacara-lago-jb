# Processa as fotos da pasta midia/galeria para a pasta img/ (web):
# - corrige a rotacao (EXIF) de fotos deitadas
# - redimensiona pra largura boa de web
# - comprime em JPEG de qualidade ~82 (carrega rapido)
# Rode de novo sempre que adicionar fotos novas (ajuste o $mapa abaixo).

Add-Type -AssemblyName System.Drawing

$base = "C:\Users\kuryc\chacara-lago-jb"
$origem = Join-Path $base "midia\galeria"
$destino = Join-Path $base "img"

# arquivo de origem  ->  @{ nome de saida ; tamanho maximo (px) }
$mapa = @(
  @{ src = "IMG_2216.JPG.jpeg"; out = "capa.jpg";          max = 1800 }  # vista geral (capa)
  @{ src = "IMG_2219.JPG.jpeg"; out = "arco-iris.jpg";      max = 1400 }
  @{ src = "IMG_2213.JPG.jpeg"; out = "praia-arvores.jpg";  max = 1400 }
  @{ src = "IMG_2214.JPG.jpeg"; out = "lago-ceu.jpg";       max = 1400 }
  @{ src = "IMG_2218.JPG.jpeg"; out = "flutuante.jpg";      max = 1400 }
  @{ src = "IMG_2220.JPG.jpeg"; out = "quiosque-redes.jpg"; max = 1400 }
  @{ src = "IMG_2217.JPG.jpeg"; out = "area-areia.jpg";     max = 1400 }
  @{ src = "58A3DA0D-54E4-40DF-BE71-E191E277DA7F.JPG.jpeg"; out = "caiaque.jpg"; max = 1400 }
)

# encoder JPEG com qualidade
$jpegEnc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$qualParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$qualParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]82)

foreach ($item in $mapa) {
  $srcPath = Join-Path $origem $item.src
  if (-not (Test-Path $srcPath)) { Write-Host "PULOU (nao achei): $($item.src)"; continue }

  $img = [System.Drawing.Image]::FromFile($srcPath)

  # corrige rotacao pela tag EXIF Orientation (0x0112)
  try {
    $orient = $img.GetPropertyItem(0x0112).Value[0]
    switch ($orient) {
      3 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
      6 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
      8 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
    }
  } catch {}

  # calcula novo tamanho mantendo proporcao
  $w = $img.Width; $h = $img.Height
  $maior = [Math]::Max($w, $h)
  $escala = if ($maior -gt $item.max) { $item.max / $maior } else { 1 }
  $nw = [int]($w * $escala); $nh = [int]($h * $escala)

  $bmp = New-Object System.Drawing.Bitmap($nw, $nh)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.DrawImage($img, 0, 0, $nw, $nh)

  $outPath = Join-Path $destino $item.out
  $bmp.Save($outPath, $jpegEnc, $qualParams)

  $g.Dispose(); $bmp.Dispose(); $img.Dispose()
  $kb = [int]((Get-Item $outPath).Length / 1024)
  Write-Host ("OK  {0,-20} {1}x{2}  {3} KB" -f $item.out, $nw, $nh, $kb)
}
Write-Host "`nPronto! Fotos prontas pra web na pasta img/"
