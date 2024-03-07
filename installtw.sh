#!/bin/sh

if ! test -f "tailwindcss" ; then
    curl -LO https://github.com/tailwindlabs/tailwindcss/releases/download/v3.4.1/tailwindcss-linux-x64
    chmod +x tailwindcss-linux-x64
    mv tailwindcss-linux-x64 tailwindcss
fi
./tailwindcss -i css/input.css -o css/output.css --watch
