@echo off
cd /d "%~dp0"
echo.
echo Mesa Madrid se abrira en http://127.0.0.1:8080
start "" http://127.0.0.1:8080
powershell -NoProfile -ExecutionPolicy Bypass -Command "$listener=New-Object System.Net.HttpListener;$listener.Prefixes.Add('http://127.0.0.1:8080/');$listener.Start();Write-Host 'Servidor activo. Pulsa Ctrl+C para cerrar.';while($listener.IsListening){$ctx=$listener.GetContext();$p=$ctx.Request.Url.LocalPath.TrimStart('/');if(!$p){$p='index.html'};$f=Join-Path (Get-Location) $p;if(Test-Path $f -PathType Leaf){$bytes=[IO.File]::ReadAllBytes($f);$ext=[IO.Path]::GetExtension($f);$types=@{'.html'='text/html; charset=utf-8';'.css'='text/css';'.js'='application/javascript';'.webp'='image/webp';'.svg'='image/svg+xml';'.webmanifest'='application/manifest+json'};$ctx.Response.ContentType=$types[$ext];$ctx.Response.ContentLength64=$bytes.Length;$ctx.Response.OutputStream.Write($bytes,0,$bytes.Length)}else{$ctx.Response.StatusCode=404};$ctx.Response.Close()}"
