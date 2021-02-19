fx_version 'cerulean'
game 'gta5'

author 'Eichenholz & Obsidianical'
description 'Galaxy Roleplay Tablet'
version '1.0.0'

ui_page 'frontend/index.html'

files {
    'frontend/*',
    'frontend/assets/js/*',
    'frontend/assets/css/*',
    'frontend/assets/img/*'
}

client_scripts {
    '@1_6/locale.lua',
    'client/*',
    'locales/*',
    'config.lua'
}

server_scripts {
    '@mysql-async/lib/MySQL.lua',
    '@1_6/locale.lua',
    'server/*'
}
