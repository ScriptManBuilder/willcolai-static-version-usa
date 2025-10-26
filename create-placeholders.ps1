Add-Type -AssemblyName System.Drawing

function Create-Placeholder {
    param (
        [string]$OutputPath,
        [int]$Width = 1920,
        [int]$Height = 1080,
        [string]$Text = "LOADING..."
    )
    
    Write-Host "Creating placeholder: $OutputPath"
    
    try {
        $bitmap = New-Object System.Drawing.Bitmap($Width, $Height)
        $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
        
        # Enable anti-aliasing
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
        $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias
        
        # Create gradient brush
        $rect = New-Object System.Drawing.Rectangle(0, 0, $Width, $Height)
        $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
            $rect,
            [System.Drawing.Color]::FromArgb(26, 26, 46),
            [System.Drawing.Color]::FromArgb(15, 52, 96),
            45
        )
        
        $graphics.FillRectangle($brush, 0, 0, $Width, $Height)
        
        # Add some gradient overlays for depth
        $overlay1 = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
            $rect,
            [System.Drawing.Color]::FromArgb(40, 77, 183, 209),
            [System.Drawing.Color]::FromArgb(0, 77, 183, 209),
            180
        )
        $graphics.FillRectangle($overlay1, 0, 0, $Width, $Height)
        
        # Draw text
        $font = New-Object System.Drawing.Font("Segoe UI", 72, [System.Drawing.FontStyle]::Bold)
        $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(200, 255, 255, 255))
        
        $textSize = $graphics.MeasureString($Text, $font)
        $x = ($Width - $textSize.Width) / 2
        $y = ($Height - $textSize.Height) / 2
        
        # Draw text shadow
        $shadowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(100, 0, 0, 0))
        $graphics.DrawString($Text, $font, $shadowBrush, $x + 4, $y + 4)
        
        # Draw main text
        $graphics.DrawString($Text, $font, $textBrush, $x, $y)
        
        # Save image
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
            [System.Drawing.Imaging.Encoder]::Quality, 
            85L
        )
        
        $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | 
            Where-Object { $_.MimeType -eq 'image/jpeg' }
        
        $bitmap.Save($OutputPath, $jpegCodec, $encoderParams)
        
        $graphics.Dispose()
        $bitmap.Dispose()
        $brush.Dispose()
        $overlay1.Dispose()
        $font.Dispose()
        $textBrush.Dispose()
        $shadowBrush.Dispose()
        
        $fileInfo = Get-Item $OutputPath
        $fileSizeKB = [math]::Round($fileInfo.Length/1KB, 2)
        Write-Host "Success: Created $OutputPath ($fileSizeKB KB)" -ForegroundColor Green
    }
    catch {
        Write-Host "Error creating $OutputPath : $_" -ForegroundColor Red
    }
}

# Main script
Write-Host "`n=== Creating Video Poster Placeholders ===" -ForegroundColor Cyan
Write-Host ""

$imagesPath = Join-Path $PSScriptRoot "public\images"

# Create images directory if it doesn't exist
if (-not (Test-Path $imagesPath)) {
    New-Item -ItemType Directory -Path $imagesPath -Force | Out-Null
    Write-Host "Created directory: $imagesPath" -ForegroundColor Yellow
}

# Create poster images
Create-Placeholder -OutputPath (Join-Path $imagesPath "video-poster-1.jpg") -Text "AI LEARNING"
Create-Placeholder -OutputPath (Join-Path $imagesPath "video-poster-2.jpg") -Text "AI IN MOTION"

Write-Host "`n=== Done! ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Check the created images in public/images/" -ForegroundColor White
Write-Host "2. Replace them with actual video posters if you have FFmpeg" -ForegroundColor White
Write-Host "3. Run: npm run build" -ForegroundColor White
Write-Host "4. Deploy to production" -ForegroundColor White
Write-Host ""
