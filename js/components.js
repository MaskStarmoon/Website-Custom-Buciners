/*
====================================================
 Katabumb Creator
 components.js
 Version : 3.0
====================================================
*/

window.Components = (function () {

"use strict";

/*
====================================================
HELPER
====================================================
*/

function createCard(title, content) {

    return `
    <div class="card">

        <div class="cardTitle">

            ${title}

        </div>

        ${content}

    </div>
    `;

}

/*
====================================================
DASHBOARD
====================================================
*/

function dashboard() {

    return createCard(

        "🏠 Dashboard",

        `

<label>Nama Project</label>

<input
type="text"
id="projectName"
placeholder="Project Baru">

<label>Template</label>

<select id="projectTemplate">

<option value="birthday">

Birthday

</option>

<option value="anniversary">

Anniversary

</option>

<option value="valentine">

Valentine

</option>

<option value="graduation">

Graduation

</option>

<option value="christmas">

Christmas

</option>

<option value="newyear">

New Year

</option>

<option value="custom">

Custom

</option>

</select>

<label>Nama Pembuat</label>

<input
type="text"
id="creatorName"
placeholder="Nama Admin">

<label>Deskripsi Project</label>

<textarea
id="projectDescription"
placeholder="Deskripsi singkat project..."></textarea>

<label>Status</label>

<select id="projectStatus">

<option>

Draft

</option>

<option>

Published

</option>

</select>

`

    );

}

/*
====================================================
THEME
====================================================
*/

function theme() {

    return createCard(

        "🎨 Theme",

        `

<label>Primary Color</label>

<input
type="color"
id="themePrimary">

<label>Secondary Color</label>

<input
type="color"
id="themeSecondary">

<label>Background Color</label>

<input
type="color"
id="themeBackground">

<label>Text Color</label>

<input
type="color"
id="themeText">

<label>Background Type</label>

<select id="backgroundType">

<option value="gradient">

Gradient

</option>

<option value="image">

Image

</option>

<option value="gif">

GIF

</option>

<option value="color">

Solid Color

</option>

</select>

<label>Background URL</label>

<input
type="text"
id="backgroundURL"
placeholder="https://...">

<label>Blur</label>

<input
type="range"
id="backgroundBlur"
min="0"
max="30"
value="0">

<label>Opacity</label>

<input
type="range"
id="backgroundOpacity"
min="0"
max="100"
value="100">

`

    );

}

/*
====================================================
HERO
====================================================
*/

function hero() {

    return createCard(

        "🖼 Hero",

        `

<label>Judul</label>

<input
type="text"
id="heroTitle"
placeholder="Happy Birthday ❤️">

<label>Sub Judul</label>

<textarea
id="heroSubtitle"></textarea>

<label>Hero Image</label>

<input
type="text"
id="heroImage"
placeholder="https://...">

<label>Upload Hero</label>

<input
type="file"
id="heroUpload"
accept="image/*">

<label>Sticker</label>

<input
type="text"
id="heroSticker"
placeholder="https://...">

<label>Upload Sticker</label>

<input
type="file"
id="stickerUpload"
accept="image/*">

<label>Border Radius</label>

<input
type="range"
id="heroRadius"
min="0"
max="50"
value="20">

<label>Shadow</label>

<select id="heroShadow">

<option>

None

</option>

<option>

Small

</option>

<option>

Medium

</option>

<option>

Large

</option>

</select>

<label>Animation</label>

<select id="heroAnimation">

<option>

Fade

</option>

<option>

Zoom

</option>

<option>

Bounce

</option>

<option>

Rotate

</option>

<option>

None

</option>

</select>

`

    );

}

/*
====================================================
EXPORT
(Sementara)
====================================================
*/

  /*
====================================================
GALLERY
====================================================
*/

function gallery() {

    return createCard(

        "📷 Gallery",

        `

<p
style="margin-bottom:15px;color:#777;">

Tambahkan foto sebanyak yang kamu inginkan.

</p>

<div id="galleryContainer">

</div>

<button
class="btn"
id="addGallery">

➕ Tambah Foto

</button>

`

    );

}

/*
====================================================
MEMORIES
====================================================
*/

function memories() {

    return createCard(

        "💖 Memories",

        `

<p
style="margin-bottom:15px;color:#777;">

Tambahkan kenangan spesial.

</p>

<div id="memoryContainer">

</div>

<button
class="btn"
id="addMemory">

➕ Tambah Memory

</button>

`

    );

}

/*
====================================================
MESSAGE
====================================================
*/

function message() {

    return createCard(

        "💌 Love Message",

        `

<p
style="margin-bottom:15px;color:#777;">

Tambah kata-kata sesukamu.

</p>

<div id="messageContainer">

</div>

<button
class="btn"
id="addMessage">

➕ Tambah Pesan

</button>

`

    );

}

/*
====================================================
GALLERY ITEM
====================================================
*/

function galleryItem(index){

return`

<div
class="galleryItem">

<label>

Link Foto

</label>

<input
type="text"
class="galleryURL"
data-index="${index}"
placeholder="https://...">

<label>

Upload Foto

</label>

<input
type="file"
class="galleryUpload"
data-index="${index}"
accept="image/*">

<button
class="btn removeGallery"
data-index="${index}">

🗑 Hapus

</button>

</div>

`;

}

/*
====================================================
MEMORY ITEM
====================================================
*/

function memoryItem(index){

return`

<div
class="memoryItem">

<label>

Foto

</label>

<input
type="text"
class="memoryImage"
data-index="${index}"
placeholder="https://...">

<label>

Caption

</label>

<textarea
class="memoryCaption"
data-index="${index}"
placeholder="Tulis kenangan...">

</textarea>

<label>

Tanggal

</label>

<input
type="date"
class="memoryDate"
data-index="${index}">

<button
class="btn removeMemory"
data-index="${index}">

🗑 Hapus

</button>

</div>

`;

}

/*
====================================================
MESSAGE ITEM
====================================================
*/

function messageItem(index){

return`

<div
class="messageItem">

<label>

Judul

</label>

<input
type="text"
class="messageTitle"
data-index="${index}"
placeholder="Happy Birthday">

<label>

Isi Pesan

</label>

<textarea
class="messageText"
data-index="${index}"
placeholder="Tulis pesan romantis...">

</textarea>

<button
class="btn removeMessage"
data-index="${index}">

🗑 Hapus

</button>

</div>

`;

}

/*
====================================================
EXPORT
(Sementara)
====================================================
*/

/*
====================================================
MUSIC
====================================================
*/

function music(){

    return createCard(

        "🎵 Music",

        `

<label>

Mode

</label>

<select id="musicMode">

<option value="link">

Link MP3

</option>

<option value="upload">

Upload MP3

</option>

</select>

<label>

URL Musik

</label>

<input
type="text"
id="musicURL"
placeholder="https://...">

<label>

Upload Musik

</label>

<input
type="file"
id="musicUpload"
accept=".mp3,audio/*">

<label>

Volume

</label>

<input
type="range"
id="musicVolume"
min="0"
max="100"
value="100">

<label>

Autoplay

</label>

<select id="musicAutoplay">

<option value="true">

Ya

</option>

<option value="false">

Tidak

</option>

</select>

<label>

Loop

</label>

<select id="musicLoop">

<option value="true">

Ya

</option>

<option value="false">

Tidak

</option>

</select>

`

    );

}

/*
====================================================
GIFT
====================================================
*/

function gift(){

    return createCard(

        "🎁 Gift",

        `

<label>

Judul Gift

</label>

<input
type="text"
id="giftTitle"
placeholder="Kartu Ulang Tahun">

<label>

Jenis

</label>

<select id="giftType">

<option>

PDF

</option>

<option>

Image

</option>

<option>

ZIP

</option>

<option>

Custom

</option>

</select>

<label>

Link Gift

</label>

<input
type="text"
id="giftURL"
placeholder="https://...">

<label>

Upload Gift

</label>

<input
type="file"
id="giftUpload">

<label>

Icon Gift

</label>

<input
type="text"
id="giftIcon"
placeholder="🎁">

`

    );

}

/*
====================================================
BUTTON
====================================================
*/

function button(){

    return createCard(

        "🔘 Custom Button",

        `

<p
style="margin-bottom:15px;color:#777;">

Tambahkan tombol sebanyak yang kamu inginkan.

</p>

<div id="buttonContainer">

</div>

<button
class="btn"
id="addButton">

➕ Tambah Button

</button>

`

    );

}

/*
====================================================
BUTTON ITEM
====================================================
*/

function buttonItem(index){

return`

<div
class="buttonItem">

<label>

Nama Tombol

</label>

<input
type="text"
class="buttonTitle"
data-index="${index}"
placeholder="Instagram">

<label>

URL

</label>

<input
type="text"
class="buttonURL"
data-index="${index}"
placeholder="https://...">

<label>

Icon

</label>

<input
type="text"
class="buttonIcon"
data-index="${index}"
placeholder="❤️">

<label>

Warna Tombol

</label>

<input
type="color"
class="buttonColor"
data-index="${index}"
value="#5B7CFA">

<label>

Style

</label>

<select
class="buttonStyle"
data-index="${index}">

<option>

Solid

</option>

<option>

Outline

</option>

<option>

Glass

</option>

<option>

Gradient

</option>

</select>

<button
class="btn removeButton"
data-index="${index}">

🗑 Hapus

</button>

</div>

`;

}

/*
====================================================
EXPORT
(SEMENTARA)
====================================================
*/

/*
====================================================
ANIMATION
====================================================
*/

function animation(){

    return createCard(

        "✨ Animation",

        `

<p
style="margin-bottom:15px;color:#777;">

Pilih animasi yang akan muncul pada halaman.

</p>

<label>

<input
type="checkbox"
id="animationHeart">

Heart

</label>

<label>

<input
type="checkbox"
id="animationConfetti">

Confetti

</label>

<label>

<input
type="checkbox"
id="animationSnow">

Snow

</label>

<label>

<input
type="checkbox"
id="animationBubble">

Bubble

</label>

<label>

<input
type="checkbox"
id="animationFirework">

Firework

</label>

<label>

<input
type="checkbox"
id="animationSakura">

Sakura

</label>

<label>

Kecepatan Animasi

</label>

<input
type="range"
id="animationSpeed"
min="1"
max="10"
value="5">

<label>

Jumlah Efek

</label>

<input
type="range"
id="animationAmount"
min="10"
max="300"
value="100">

`

    );

}

/*
====================================================
SEO
====================================================
*/

function seo(){

    return createCard(

        "🌐 SEO",

        `

<label>

SEO Title

</label>

<input
type="text"
id="seoTitle">

<label>

Description

</label>

<textarea
id="seoDescription"></textarea>

<label>

Keywords

</label>

<input
type="text"
id="seoKeywords">

<label>

Favicon

</label>

<input
type="text"
id="seoFavicon"
placeholder="https://...">

<label>

Open Graph Image

</label>

<input
type="text"
id="seoImage"
placeholder="https://...">

`

    );

}

/*
====================================================
GENERATE
====================================================
*/

function generate(){

    return createCard(

        "🚀 Generate Website",

        `

<p
style="margin-bottom:20px;color:#777;">

Pastikan semua data sudah benar sebelum melakukan generate.

</p>

<button
class="btn"
id="saveDraft">

💾 Simpan Draft

</button>

<button
class="btn"
id="previewWebsite">

👀 Preview Website

</button>

<button
class="btn"
id="generateWebsite">

🚀 Generate Website

</button>

<button
class="btn"
id="exportProject">

📦 Export Project

</button>

<button
class="btn"
id="importProject">

📂 Import Project

</button>

<input
type="file"
id="importProjectFile"
accept=".json"
style="display:none;">

`

    );

}

/*
====================================================
LOADING COMPONENT
====================================================
*/

function loading(){

    return `

<div
class="loadingComponent">

<div class="loadingSpinner">

</div>

<div class="loadingText">

Generating Website...

</div>

</div>

`;

}

/*
====================================================
SUCCESS COMPONENT
====================================================
*/

function success(){

    return `

<div class="successComponent">

<h2>

🎉 Website Berhasil Dibuat

</h2>

<label>

Kode Redeem

</label>

<input
id="successRedeem"
readonly>

<label>

Link Website

</label>

<input
id="successURL"
readonly>

<div
class="successButtonGroup">

<button
class="btn"
id="copyRedeem">

Copy Redeem

</button>

<button
class="btn"
id="copyURL">

Copy URL

</button>

<button
class="btn"
id="openWebsite">

Buka Website

</button>

</div>

</div>

`;

}

/*
====================================================
EXPORT
(SEMENTARA)
====================================================
*/

return{

dashboard,

theme,

hero,

gallery,

memories,

message,

galleryItem,

memoryItem,

messageItem,

music,

gift,

button,

buttonItem,

animation,

seo,

generate,

loading,

success
