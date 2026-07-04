/*
==================================================
Katabumb Creator
render.js

PART 1
Core Render System

Compatible with:
- storage.js
- components.js
- preview.js
- api.js
==================================================
*/

/*
==================================================
GLOBAL ELEMENT
==================================================
*/

const settingPanel =
document.getElementById("settingPanel");

const phonePreview =
document.getElementById("phonePreview");

const saveStatus =
document.getElementById("saveStatus");

const toast =
document.getElementById("toast");

/*
==================================================
CURRENT PAGE
==================================================
*/

let currentPage = "dashboard";

/*
==================================================
SHORTCUT STATE
==================================================
*/

const state = window.state;

/*
==================================================
SAVE STATUS
==================================================
*/

window.setSaveStatus = function(text){

    if(saveStatus){

        saveStatus.textContent = text;

    }

}

/*
==================================================
TOAST
==================================================
*/

window.showToast = function(text){

    if(!toast)return;

    toast.textContent = text;

    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(()=>{

        toast.classList.remove("show");

    },2000);

}

/*
==================================================
AUTO SAVE
==================================================
*/

function autoSave(){

    scheduleSave();

    setSaveStatus("Menyimpan...");

    clearTimeout(window.statusTimer);

    window.statusTimer = setTimeout(()=>{

        setSaveStatus("✔ Draft tersimpan otomatis");

    },500);

}

/*
==================================================
REFRESH PREVIEW
==================================================
*/

function refreshPreview(){

    if(window.renderPreview){

        renderPreview(state);

    }

}

/*
==================================================
OPEN PAGE
==================================================
*/

function openPage(page){

    currentPage = page;

    renderPage(page);

}

/*
==================================================
MENU ACTIVE
==================================================
*/

function updateMenu(){

    document

    .querySelectorAll(".menu button")

    .forEach(button=>{

        if(

            button.dataset.page===currentPage

        ){

            button.classList.add("active");

        }

        else{

            button.classList.remove("active");

        }

    });

}

/*
==================================================
MAIN RENDER
==================================================
*/

function renderPage(page){

    currentPage = page;

    updateMenu();

    switch(page){

        case "dashboard":

            renderDashboard();

        break;

        case "theme":

            renderTheme();

        break;

        case "hero":

            renderHero();

        break;

        case "gallery":

            renderGallery();

        break;

        case "memories":

            renderMemories();

        break;

        case "message":

            renderMessage();

        break;

        case "music":

            renderMusic();

        break;

        case "gift":

            renderGift();

        break;

        case "button":

            renderButton();

        break;

        case "animation":

            renderAnimation();

        break;

        case "seo":

            renderSEO();

        break;

        case "generate":

            renderGenerate();

        break;

    }

}

/*
==================================================
RENDER ALL
==================================================
*/

function renderAll(){

    renderPage(currentPage);

    refreshPreview();

}

/*
==================================================
MENU EVENT
==================================================
*/

document

.querySelectorAll(".menu button")

.forEach(button=>{

    button.onclick=()=>{

        openPage(

            button.dataset.page

        );

    };

});

/*
==================================================
WINDOW EXPORT
==================================================
*/

window.renderPage = renderPage;

window.renderAll = renderAll;

window.refreshPreview = refreshPreview;

window.autoSave = autoSave;

/*
==================================================
END PART 1
==================================================
*/

/*
==================================================
PART 2

DASHBOARD
THEME
HERO

==================================================
*/

/*
==================================================
DASHBOARD
==================================================
*/

function renderDashboard(){

    settingPanel.innerHTML = Components.dashboard();

    const projectName =
    document.getElementById("projectName");

    const projectTemplate =
    document.getElementById("projectTemplate");

    if(projectName){

        projectName.value =
        state.project.name;

        projectName.oninput = ()=>{

            setState(
                "project.name",
                projectName.value
            );

            autoSave();

            refreshPreview();

        };

    }

    if(projectTemplate){

        projectTemplate.value =
        state.project.template;

        projectTemplate.onchange = ()=>{

            setState(
                "project.template",
                projectTemplate.value
            );

            autoSave();

            refreshPreview();

        };

    }

}

/*
==================================================
THEME
==================================================
*/

function renderTheme(){

    settingPanel.innerHTML = Components.theme();

    const primary =
    document.getElementById("themePrimary");

    const secondary =
    document.getElementById("themeSecondary");

    const background =
    document.getElementById("themeBackground");

    const text =
    document.getElementById("themeText");

    primary.value =
    state.theme.primary;

    secondary.value =
    state.theme.secondary;

    background.value =
    state.theme.background;

    text.value =
    state.theme.text;

    primary.oninput=()=>{

        setState(

            "theme.primary",

            primary.value

        );

        autoSave();

        refreshPreview();

    };

    secondary.oninput=()=>{

        setState(

            "theme.secondary",

            secondary.value

        );

        autoSave();

        refreshPreview();

    };

    background.oninput=()=>{

        setState(

            "theme.background",

            background.value

        );

        autoSave();

        refreshPreview();

    };

    text.oninput=()=>{

        setState(

            "theme.text",

            text.value

        );

        autoSave();

        refreshPreview();

    };

}

/*
==================================================
HERO
==================================================
*/

function renderHero(){

    settingPanel.innerHTML = Components.hero();

    const heroImage =
    document.getElementById("heroImage");

    const heroSticker =
    document.getElementById("heroSticker");

    const heroTitle =
    document.getElementById("heroTitle");

    const heroSubtitle =
    document.getElementById("heroSubtitle");

    heroImage.value =
    state.hero.image;

    heroSticker.value =
    state.hero.sticker;

    heroTitle.value =
    state.hero.title;

    heroSubtitle.value =
    state.hero.subtitle;

    heroImage.oninput=()=>{

        setState(

            "hero.image",

            heroImage.value

        );

        autoSave();

        refreshPreview();

    };

    heroSticker.oninput=()=>{

        setState(

            "hero.sticker",

            heroSticker.value

        );

        autoSave();

        refreshPreview();

    };

    heroTitle.oninput=()=>{

        setState(

            "hero.title",

            heroTitle.value

        );

        autoSave();

        refreshPreview();

    };

    heroSubtitle.oninput=()=>{

        setState(

            "hero.subtitle",

            heroSubtitle.value

        );

        autoSave();

        refreshPreview();

    };

}

/*
==================================================
END PART 2
==================================================
*/

/*
==================================================
PART 3

GALLERY
MEMORIES
MESSAGE

==================================================
*/

/*
==================================================
GALLERY
==================================================
*/

function renderGallery(){

    settingPanel.innerHTML =
    Components.gallery();

    drawGallery();

}

function drawGallery(){

    const list =
    document.getElementById("galleryList");

    if(!list)return;

    list.innerHTML="";

    state.gallery.forEach((item,index)=>{

        list.innerHTML += Components.galleryItem(index,item);

    });

    bindGallery();

}

function bindGallery(){

    document
    .querySelectorAll(".galleryURL")
    .forEach(input=>{

        input.oninput=()=>{

            state.gallery[
                input.dataset.index
            ].url=input.value;

            autoSave();

            refreshPreview();

        };

    });

    document
    .querySelectorAll(".galleryRemove")
    .forEach(btn=>{

        btn.onclick=()=>{

            state.gallery.splice(

                btn.dataset.index,

                1

            );

            drawGallery();

            autoSave();

            refreshPreview();

        };

    });

    const add=
    document.getElementById(

        "galleryAdd"

    );

    if(add){

        add.onclick=()=>{

            state.gallery.push({

                url:""

            });

            drawGallery();

            autoSave();

            refreshPreview();

        };

    }

}

/*
==================================================
MEMORIES
==================================================
*/

function renderMemories(){

    settingPanel.innerHTML=
    Components.memories();

    drawMemories();

}

function drawMemories(){

    const list=
    document.getElementById(

        "memoryList"

    );

    if(!list)return;

    list.innerHTML="";

    state.memories.forEach(

        (item,index)=>{

            list.innerHTML+=

            Components.memoryItem(

                index,

                item

            );

        }

    );

    bindMemories();

}

function bindMemories(){

    document

    .querySelectorAll(

        ".memoryImage"

    )

    .forEach(input=>{

        input.oninput=()=>{

            state.memories[

                input.dataset.index

            ].image=input.value;

            autoSave();

            refreshPreview();

        };

    });

    document

    .querySelectorAll(

        ".memoryCaption"

    )

    .forEach(input=>{

        input.oninput=()=>{

            state.memories[

                input.dataset.index

            ].caption=input.value;

            autoSave();

            refreshPreview();

        };

    });

    document

    .querySelectorAll(

        ".memoryRemove"

    )

    .forEach(btn=>{

        btn.onclick=()=>{

            state.memories.splice(

                btn.dataset.index,

                1

            );

            drawMemories();

            autoSave();

            refreshPreview();

        };

    });

    const add=

    document.getElementById(

        "memoryAdd"

    );

    if(add){

        add.onclick=()=>{

            state.memories.push({

                image:"",

                caption:""

            });

            drawMemories();

            autoSave();

            refreshPreview();

        };

    }

}

/*
==================================================
LOVE MESSAGE
==================================================
*/

function renderMessage(){

    settingPanel.innerHTML=

    Components.message();

    drawMessages();

}

function drawMessages(){

    const list=

    document.getElementById(

        "messageList"

    );

    if(!list)return;

    list.innerHTML="";

    state.messages.forEach(

        (item,index)=>{

            list.innerHTML+=

            Components.messageItem(

                index,

                item

            );

        }

    );

    bindMessages();

}

function bindMessages(){

    document

    .querySelectorAll(

        ".messageText"

    )

    .forEach(input=>{

        input.oninput=()=>{

            state.messages[

                input.dataset.index

            ].text=input.value;

            autoSave();

            refreshPreview();

        };

    });

    document

    .querySelectorAll(

        ".messageRemove"

    )

    .forEach(btn=>{

        btn.onclick=()=>{

            state.messages.splice(

                btn.dataset.index,

                1

            );

            drawMessages();

            autoSave();

            refreshPreview();

        };

    });

    const add=

    document.getElementById(

        "messageAdd"

    );

    if(add){

        add.onclick=()=>{

            state.messages.push({

                text:""

            });

            drawMessages();

            autoSave();

            refreshPreview();

        };

    }

}

/*
==================================================
END PART 3
==================================================
*/

/*
==================================================
PART 4

MUSIC
GIFT
BUTTON

==================================================
*/

/*
==================================================
MUSIC
==================================================
*/

function renderMusic(){

    settingPanel.innerHTML =
    Components.music();

    const type =
    document.getElementById("musicType");

    const url =
    document.getElementById("musicURL");

    const upload =
    document.getElementById("musicUpload");

    const autoplay =
    document.getElementById("musicAutoplay");

    const loop =
    document.getElementById("musicLoop");

    const volume =
    document.getElementById("musicVolume");

    if(type){

        type.value = state.music.type;

        type.onchange=()=>{

            setState(

                "music.type",

                type.value

            );

            autoSave();

            refreshPreview();

        };

    }

    if(url){

        url.value = state.music.url;

        url.oninput=()=>{

            setState(

                "music.url",

                url.value

            );

            autoSave();

            refreshPreview();

        };

    }

    if(upload){

        upload.onchange=(e)=>{

            const file=e.target.files[0];

            if(!file)return;

            const reader=new FileReader();

            reader.onload=(event)=>{

                setState(

                    "music.url",

                    event.target.result

                );

                autoSave();

                refreshPreview();

            };

            reader.readAsDataURL(file);

        };

    }

    if(autoplay){

        autoplay.checked=

        state.music.autoplay;

        autoplay.onchange=()=>{

            setState(

                "music.autoplay",

                autoplay.checked

            );

            autoSave();

            refreshPreview();

        };

    }

    if(loop){

        loop.checked=

        state.music.loop;

        loop.onchange=()=>{

            setState(

                "music.loop",

                loop.checked

            );

            autoSave();

            refreshPreview();

        };

    }

    if(volume){

        volume.value=

        state.music.volume;

        volume.oninput=()=>{

            setState(

                "music.volume",

                Number(volume.value)

            );

            autoSave();

            refreshPreview();

        };

    }

}

/*
==================================================
GIFT
==================================================
*/

function renderGift(){

    settingPanel.innerHTML=

    Components.gift();

    const title=

    document.getElementById(

        "giftTitle"

    );

    const type=

    document.getElementById(

        "giftType"

    );

    const url=

    document.getElementById(

        "giftURL"

    );

    const upload=

    document.getElementById(

        "giftUpload"

    );

    if(title){

        title.value=

        state.gift.title;

        title.oninput=()=>{

            setState(

                "gift.title",

                title.value

            );

            autoSave();

            refreshPreview();

        };

    }

    if(type){

        type.value=

        state.gift.type;

        type.onchange=()=>{

            setState(

                "gift.type",

                type.value

            );

            autoSave();

            refreshPreview();

        };

    }

    if(url){

        url.value=

        state.gift.url;

        url.oninput=()=>{

            setState(

                "gift.url",

                url.value

            );

            autoSave();

            refreshPreview();

        };

    }

    if(upload){

        upload.onchange=(e)=>{

            const file=e.target.files[0];

            if(!file)return;

            const reader=

            new FileReader();

            reader.onload=(event)=>{

                setState(

                    "gift.url",

                    event.target.result

                );

                autoSave();

                refreshPreview();

            };

            reader.readAsDataURL(file);

        };

    }

}

/*
==================================================
BUTTON
==================================================
*/

function renderButton(){

    settingPanel.innerHTML=

    Components.button();

    drawButtons();

}

function drawButtons(){

    const list=

    document.getElementById(

        "buttonList"

    );

    if(!list)return;

    list.innerHTML="";

    state.buttons.forEach(

        (item,index)=>{

            list.innerHTML+=

            Components.buttonItem(

                index,

                item

            );

        }

    );

    bindButtons();

}

function bindButtons(){

    document

    .querySelectorAll(

        ".buttonTitle"

    )

    .forEach(input=>{

        input.oninput=()=>{

            state.buttons[

                input.dataset.index

            ].title=input.value;

            autoSave();

            refreshPreview();

        };

    });

    document

    .querySelectorAll(

        ".buttonURL"

    )

    .forEach(input=>{

        input.oninput=()=>{

            state.buttons[

                input.dataset.index

            ].url=input.value;

            autoSave();

            refreshPreview();

        };

    });

    document

    .querySelectorAll(

        ".buttonRemove"

    )

    .forEach(btn=>{

        btn.onclick=()=>{

            state.buttons.splice(

                btn.dataset.index,

                1

            );

            drawButtons();

            autoSave();

            refreshPreview();

        };

    });

    const add=

    document.getElementById(

        "buttonAdd"

    );

    if(add){

        add.onclick=()=>{

            state.buttons.push({

                title:"",

                url:""

            });

            drawButtons();

            autoSave();

            refreshPreview();

        };

    }

}

/*
==================================================
END PART 4
==================================================
*/

/*
==================================================
PART 5

ANIMATION
SEO
GENERATE

==================================================
*/

/*
==================================================
ANIMATION
==================================================
*/

function renderAnimation(){

    settingPanel.innerHTML =
    Components.animation();

    bindAnimation();

}

function bindAnimation(){

    const animationList=[

        "heart",

        "confetti",

        "bubble",

        "sakura",

        "firework",

        "snow"

    ];

    animationList.forEach(name=>{

        const checkbox=

        document.getElementById(

            "animation_"+name

        );

        if(!checkbox)return;

        checkbox.checked=

        state.animation[name];

        checkbox.onchange=()=>{

            setState(

                "animation."+name,

                checkbox.checked

            );

            autoSave();

            refreshPreview();

        };

    });

}

/*
==================================================
SEO
==================================================
*/

function renderSEO(){

    settingPanel.innerHTML=

    Components.seo();

    const title=

    document.getElementById(

        "seoTitle"

    );

    const description=

    document.getElementById(

        "seoDescription"

    );

    const keywords=

    document.getElementById(

        "seoKeywords"

    );

    const favicon=

    document.getElementById(

        "seoFavicon"

    );

    const ogImage=

    document.getElementById(

        "seoOGImage"

    );

    if(title){

        title.value=

        state.seo.title;

        title.oninput=()=>{

            setState(

                "seo.title",

                title.value

            );

            autoSave();

        };

    }

    if(description){

        description.value=

        state.seo.description;

        description.oninput=()=>{

            setState(

                "seo.description",

                description.value

            );

            autoSave();

        };

    }

    if(keywords){

        keywords.value=

        state.seo.keywords;

        keywords.oninput=()=>{

            setState(

                "seo.keywords",

                keywords.value

            );

            autoSave();

        };

    }

    if(favicon){

        favicon.value=

        state.seo.favicon;

        favicon.oninput=()=>{

            setState(

                "seo.favicon",

                favicon.value

            );

            autoSave();

        };

    }

    if(ogImage){

        ogImage.value=

        state.seo.ogImage;

        ogImage.oninput=()=>{

            setState(

                "seo.ogImage",

                ogImage.value

            );

            autoSave();

        };

    }

}

/*
==================================================
GENERATE
==================================================
*/

function renderGenerate(){

    settingPanel.innerHTML=

    Components.generate();

    const exportBtn=

    document.getElementById(

        "exportProject"

    );

    const importBtn=

    document.getElementById(

        "importProject"

    );

    const importFile=

    document.getElementById(

        "importFile"

    );

    const resetBtn=

    document.getElementById(

        "resetProject"

    );

    const generateBtn=

    document.getElementById(

        "generateProject"

    );

    if(exportBtn){

        exportBtn.onclick=()=>{

            exportProject();

            showToast(

                "Project berhasil diexport."

            );

        };

    }

    if(importBtn){

        importBtn.onclick=()=>{

            importFile.click();

        };

    }

    if(importFile){

        importFile.onchange=(e)=>{

            const file=

            e.target.files[0];

            if(!file)return;

            importProject(file);

            refreshPreview();

        };

    }

    if(resetBtn){

        resetBtn.onclick=()=>{

            if(

                confirm(

                    "Reset seluruh project?"

                )

            ){

                resetStorage();

                renderAll();

                showToast(

                    "Project berhasil direset."

                );

            }

        };

    }

    if(generateBtn){

        generateBtn.onclick=()=>{

            startGenerate();

        };

    }

}

/*
==================================================
START GENERATE
==================================================
*/

function startGenerate(){

    if(window.generateWebsite){

        generateWebsite(

            state

        );

        return;

    }

    console.log(

        state

    );

    showToast(

        "API belum tersedia."

    );

}

/*
==================================================
END PART 5
==================================================
*/

/*
==================================================
PART 6

PREVIEW
HELPER
GLOBAL UPDATE
FILE UPLOAD

==================================================
*/

/*
==================================================
SAFE PREVIEW
==================================================
*/

function refreshPreview(){

    if(typeof window.renderPreview==="function"){

        window.renderPreview(state);

    }

}

/*
==================================================
REFRESH ALL
==================================================
*/

function refreshAll(){

    renderPage(currentPage);

    refreshPreview();

}

/*
==================================================
UPDATE STATE
==================================================
*/

function updateValue(path,value){

    setState(path,value);

    autoSave();

    refreshPreview();

}

/*
==================================================
UPLOAD IMAGE
==================================================
*/

function uploadImage(file,callback){

    if(!file)return;

    const reader=new FileReader();

    reader.onload=function(e){

        callback(e.target.result);

    };

    reader.readAsDataURL(file);

}

/*
==================================================
UPLOAD AUDIO
==================================================
*/

function uploadAudio(file,callback){

    if(!file)return;

    const reader=new FileReader();

    reader.onload=function(e){

        callback(e.target.result);

    };

    reader.readAsDataURL(file);

}

/*
==================================================
UPLOAD FILE
==================================================
*/

function uploadFile(file,callback){

    if(!file)return;

    const reader=new FileReader();

    reader.onload=function(e){

        callback(e.target.result);

    };

    reader.readAsDataURL(file);

}

/*
==================================================
OPEN LOADING
==================================================
*/

function showLoading(text){

    const modal=

    document.getElementById(

        "loadingModal"

    );

    const label=

    document.getElementById(

        "loadingText"

    );

    if(label){

        label.textContent=

        text ||

        "Memproses...";

    }

    if(modal){

        modal.classList.remove(

            "hidden"

        );

    }

}

/*
==================================================
CLOSE LOADING
==================================================
*/

function hideLoading(){

    const modal=

    document.getElementById(

        "loadingModal"

    );

    if(modal){

        modal.classList.add(

            "hidden"

        );

    }

}

/*
==================================================
SUCCESS MODAL
==================================================
*/

function showSuccess(redeem,url){

    const modal=

    document.getElementById(

        "successModal"

    );

    if(!modal)return;

    document.getElementById(

        "redeemCode"

    ).value=redeem;

    document.getElementById(

        "websiteURL"

    ).value=url;

    modal.classList.remove(

        "hidden"

    );

}

/*
==================================================
COPY BUTTON
==================================================
*/

const copyRedeem=

document.getElementById(

    "copyRedeem"

);

if(copyRedeem){

    copyRedeem.onclick=()=>{

        navigator.clipboard.writeText(

            document.getElementById(

                "redeemCode"

            ).value

        );

        showToast(

            "Redeem berhasil disalin."

        );

    };

}

const copyURL=

document.getElementById(

    "copyURL"

);

if(copyURL){

    copyURL.onclick=()=>{

        navigator.clipboard.writeText(

            document.getElementById(

                "websiteURL"

            ).value

        );

        showToast(

            "Link berhasil disalin."

        );

    };

}

/*
==================================================
OPEN WEBSITE
==================================================
*/

const openWebsite=

document.getElementById(

    "openWebsite"

);

if(openWebsite){

    openWebsite.onclick=()=>{

        window.open(

            document.getElementById(

                "websiteURL"

            ).value,

            "_blank"

        );

    };

}

/*
==================================================
CLOSE SUCCESS
==================================================
*/

const closeSuccess=

document.getElementById(

    "closeSuccess"

);

if(closeSuccess){

    closeSuccess.onclick=()=>{

        document

        .getElementById(

            "successModal"

        )

        .classList.add(

            "hidden"

        );

    };

}

/*
==================================================
WINDOW EXPORT
==================================================
*/

window.refreshAll=

refreshAll;

window.updateValue=

updateValue;

window.uploadImage=

uploadImage;

window.uploadAudio=

uploadAudio;

window.uploadFile=

uploadFile;

window.showLoading=

showLoading;

window.hideLoading=

hideLoading;

window.showSuccess=

showSuccess;

/*
==================================================
END PART 6
==================================================
*/

/*
==================================================
PART 7

FINAL BOOTSTRAP

==================================================
*/

/*
==================================================
INIT
==================================================
*/

function initRender(){

    try{

        if(typeof loadStorage==="function"){

            loadStorage();

        }

    }

    catch(err){

        console.error(

            "Storage Error",

            err

        );

    }

    updateMenu();

    renderPage(currentPage);

    refreshPreview();

    setSaveStatus(

        "✔ Draft dimuat"

    );

}

/*
==================================================
RENDER FIRST
==================================================
*/

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        initRender();

    }

);

/*
==================================================
WINDOW EVENT

AUTO REFRESH

==================================================
*/

window.addEventListener(

    "focus",

    ()=>{

        refreshPreview();

    }

);

/*
==================================================
AUTO SAVE BEFORE EXIT

==================================================
*/

window.addEventListener(

    "beforeunload",

    ()=>{

        if(typeof saveStorage==="function"){

            saveStorage();

        }

    }

);

/*
==================================================
GLOBAL ERROR

==================================================
*/

window.addEventListener(

    "error",

    function(e){

        console.error(

            e.error ||

            e.message

        );

    }

);

/*
==================================================
UNHANDLED PROMISE

==================================================
*/

window.addEventListener(

    "unhandledrejection",

    function(e){

        console.error(

            e.reason

        );

    }

);

/*
==================================================
GLOBAL EXPORT

==================================================
*/

window.Render={

    state,

    autoSave,

    renderAll,

    renderPage,

    refreshPreview,

    refreshAll,

    updateValue,

    openPage,

    initRender

};

/*
==================================================
DEBUG

==================================================
*/

window.Creator={

    state,

    renderAll,

    renderPage,

    refreshPreview,

    openPage

};

/*
==================================================
STARTUP MESSAGE

==================================================
*/

console.log(

"%cKatabumb Creator Loaded",

"color:#5B7CFA;font-size:16px;font-weight:bold"

);

console.log(

"Version : 1.0"

);

console.log(

"Modules :",

{

storage:

typeof loadStorage==="function",

components:

typeof Components!=="undefined",

render:true,

preview:

typeof window.renderPreview==="function",

api:

typeof window.generateWebsite==="function"

}

);

/*
==================================================
READY

==================================================
*/

window.dispatchEvent(

    new Event(

        "KatabumbReady"

    )

);

/*
==================================================
END

==================================================
*/
