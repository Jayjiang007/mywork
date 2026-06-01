const byId = (id) => document.getElementById(id);

const ASSET_URLS = window.ASSET_URLS || {};
const asset = (path) => ASSET_URLS[path] || path;
const list = (folder, files) => files.map((file) => asset(`${folder}/${file}`));

const projects = [
  {
    title: "PICO OS",
    year: "Product system",
    category: "科技",
    tags: ["科技"],
    cover: asset("PICO OS/封面.jpg"),
    description: "围绕系统产品介绍建立完整的视觉秩序，突出功能结构、体验路径与产品气质。",
    images: list("PICO OS", [
      "封面.jpg",
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "16.jpg",
      "17.jpg",
      "19.jpg",
      "20.jpg",
      "21.jpg",
      "31.jpg",
      "34.jpg",
      "35.jpg",
      "36.jpg",
      "37.jpg",
    ]),
  },
  {
    title: "腾讯数字大会",
    year: "Conference deck",
    category: "科技",
    tags: ["科技", "发布会"],
    cover: asset("腾讯数字大会/1.jpg"),
    description: "大会主题演示与视觉系统搭建，强调信息层级、科技感节奏与大屏阅读效率。",
    images: [
      ...list("腾讯数字大会", [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "14.jpg",
        "15.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
        "20.jpg",
      ]),
      ...list("腾讯数字大会/TENCENT", [
        "3.jpg",
        "4.jpg",
        "6.jpg",
        "7.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "18.jpg",
        "19.jpg",
      ]),
    ],
  },
  {
    title: "石头科技",
    year: "Product story",
    category: "科技",
    tags: ["科技"],
    cover: asset("石头科技/封面.jpg"),
    description: "围绕产品价值、技术卖点与品牌气质，搭建更适合传播与讲述的演示页面系统。",
    images: list("石头科技", [
      "封面.jpg",
      "1.jpg",
      "7.jpg",
      "16.jpg",
      "18.jpg",
      "19.jpg",
      "20.jpg",
      "21.jpg",
      "22.jpg",
      "24.jpg",
      "25.jpg",
      "26.jpg",
      "27.jpg",
      "28.jpg",
      "29.jpg",
      "30.jpg",
      "32.jpg",
      "33.jpg",
      "34.jpg",
      "35.jpg",
      "36.jpg",
      "37.jpg",
      "38.jpg",
      "39.jpg",
      "40.jpg",
      "41.jpg",
      "42.jpg",
      "43.jpg",
      "44.jpg",
      "45.jpg",
      "46.jpg",
      "47.jpg",
      "48.jpg",
      "50.jpg",
      "51.jpg",
      "52.jpg",
      "53.jpg",
      "54.jpg",
      "55.jpg",
      "56.jpg",
      "57.jpg",
      "59.jpg",
      "68.jpg",
    ]),
  },
  {
    title: "百度 AI 外部合作手册",
    year: "Brand manual",
    category: "科技",
    tags: ["科技"],
    cover: asset("百度AI外部合作手册/封面.jpg"),
    description: "面向合作伙伴的 AI 业务手册，兼顾可信表达、信息结构与模块化内容承载。",
    images: list("百度AI外部合作手册", [
      "封面.jpg",
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.jpg",
      "16.jpg",
      "17.jpg",
      "18.jpg",
      "19.jpg",
      "20.jpg",
      "21.jpg",
      "22.jpg",
      "23.jpg",
      "24.jpg",
      "25.jpg",
      "26.jpg",
    ]),
  },
  {
    title: "百度地图 V21 发布",
    year: "Launch keynote",
    category: "科技",
    tags: ["科技", "发布会"],
    cover: asset("百度地图V21发布/封面.jpg"),
    description: "以版本发布为线索，围绕产品能力、场景更新与发布节奏组织视觉叙事。",
    images: list("百度地图V21发布", [
      "封面.jpg",
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "19.jpg",
      "20.jpg",
      "22.jpg",
      "23.jpg",
      "29.jpg",
      "34.jpg",
      "35.jpg",
      "36.jpg",
      "37.jpg",
      "41.jpg",
    ]),
  },
  {
    title: "火山引擎 AI 云介绍",
    year: "Product deck",
    category: "科技",
    tags: ["科技"],
    cover: asset("火山引擎AI云介绍/1.jpg"),
    description: "将复杂架构与场景能力转译成更清晰的商业表达，适合销售与对外沟通使用。",
    images: list("火山引擎AI云介绍", [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.jpg",
      "16.jpg",
      "17.jpg",
      "18.jpg",
      "19.jpg",
      "20.jpg",
      "21.jpg",
      "22.jpg",
      "23.jpg",
    ]),
  },
  {
    title: "小红书生活服务大会",
    year: "Industry summit",
    category: "平台",
    tags: ["平台", "发布会"],
    cover: asset("小红书生活服务大会/【上台版】美奈子-演讲0829-2225/1.jpg"),
    description: "多套大会演讲页面并行推进，在平台调性、嘉宾表达与现场传播之间建立统一气质。",
    images: [
      ...list("小红书生活服务大会/【上台版】美奈子-演讲0829-2225", [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
      ]),
      ...list("小红书生活服务大会/4-苍响-Final-带题词-08292215", [
        "1.jpg",
        "2.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
        "20.jpg",
        "21.jpg",
        "22.jpg",
        "23.jpg",
        "24.jpg",
      ]),
      ...list("小红书生活服务大会/生服大会-觅阳-0829-final-美化", [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
        "20.jpg",
        "21.jpg",
        "22.jpg",
        "23.jpg",
        "24.jpg",
      ]),
    ],
  },
  {
    title: "小红书母婴行业买手大会",
    year: "Industry summit",
    category: "平台",
    tags: ["平台", "发布会"],
    cover: asset("小红书母婴行业 - 买手大会/1.jpg"),
    description: "围绕行业大会主叙事，强化平台气质、内容可读性与现场屏幕传播效果。",
    images: list("小红书母婴行业 - 买手大会", [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
    ]),
  },
  {
    title: "抖音电商女装行业华东年度商家大会",
    year: "Merchant summit",
    category: "平台",
    tags: ["平台", "发布会"],
    cover: asset("抖音电商女装行业华东年度商家大会/5.jpg"),
    description: "为电商行业大会建立更强的版式秩序，用视觉系统承载数据、策略与年度叙事。",
    images: list("抖音电商女装行业华东年度商家大会", [
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.jpg",
      "16.jpg",
      "17.jpg",
      "18.jpg",
      "19.jpg",
      "20.jpg",
    ]),
  },
  {
    title: "京东科技",
    year: "Corporate deck",
    category: "科技",
    tags: ["科技"],
    cover: asset("京东科技/封面.jpg"),
    description: "突出企业科技业务的结构化信息、可信度表达与更成熟的商务沟通气质。",
    images: list("京东科技", [
      "封面.jpg",
      "图片31.jpg",
      "图片32.jpg",
      "图片33.jpg",
      "图片34.jpg",
      "图片35.jpg",
      "图片36.jpg",
    ]),
  },
  {
    title: "SMART 精灵 #1 发布会",
    year: "Launch keynote",
    category: "发布会",
    tags: ["发布会"],
    cover: asset("SMART精灵#1 发布会/图片12.jpg"),
    description: "以产品个性、品牌识别与舞台冲击为核心，塑造更有记忆点的新车发布片段。",
    images: list("SMART精灵#1 发布会", [
      "图片12.jpg",
      "图片13.jpg",
      "图片14.jpg",
      "图片15.jpg",
      "图片16.jpg",
      "图片17.jpg",
    ]),
  },
  {
    title: "东南试驾活动",
    year: "Event deck",
    category: "发布会",
    tags: ["发布会"],
    cover: asset("东南试驾活动/封面.jpg"),
    description: "围绕路线体验、活动信息与品牌现场感，建立适合活动传播的演示页面。",
    images: list("东南试驾活动", [
      "封面.jpg",
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.jpg",
      "16.jpg",
      "17.jpg",
      "18.jpg",
      "19.jpg",
      "20.jpg",
    ]),
  },
  {
    title: "吉利星越 L 发布会",
    year: "Launch keynote",
    category: "发布会",
    tags: ["发布会"],
    cover: asset("吉利星越L发布会/图片19.jpg"),
    description: "强化产品气势、视觉冲击与舞台可读性，让发布内容在大屏上更具说服力。",
    images: list("吉利星越L发布会", [
      "图片19.jpg",
      "图片20.jpg",
      "图片21.jpg",
      "图片22.jpg",
      "图片23.jpg",
      "图片24.jpg",
    ]),
  },
  {
    title: "哈佛大狗发布会",
    year: "Launch keynote",
    category: "发布会",
    tags: ["发布会"],
    cover: asset("哈佛大狗发布会/封面.png"),
    description: "围绕车型性格与卖点表达设计现场视觉，兼顾品牌辨识度与大屏冲击力。",
    images: list("哈佛大狗发布会", [
      "封面.png",
      "11.png",
      "图片39.png",
      "图片40.png",
      "图片41.png",
      "图片42.png",
    ]),
  },
  {
    title: "哈佛神兽发布会",
    year: "Launch keynote",
    category: "发布会",
    tags: ["发布会"],
    cover: asset("哈佛神兽发布会/图片49.jpg"),
    description: "通过节奏推进与记忆点强化，构建更有舞台表现力的汽车发布视觉片段。",
    images: list("哈佛神兽发布会", [
      "图片49.jpg",
      "图片50.jpg",
      "图片51.jpg",
      "图片52.jpg",
      "图片53.jpg",
      "图片54.jpg",
      "图片55.jpg",
      "图片56.jpg",
    ]),
  },
];

const journals = [
  {
    title: "把复杂业务讲成可被记住的三幕结构",
    meta: "Storytelling / Business deck",
    body: [
      "复杂业务最容易落入的误区，是把所有信息同时摊开，默认观众会自己找到重点。真正有效的商业叙事，往往需要设计者先替观众完成一次判断。",
      "我通常会把内容拆成三幕：第一幕建立问题，让人知道为什么现在必须关注；第二幕展开方法，把能力、产品或策略放进一条清晰路径；第三幕收束价值，让所有页面回到一个可以被复述的结论。",
      "这种结构不是为了把内容做简单，而是为了给复杂信息建立前进方向。每一页都回答一个明确问题，每一组视觉都服务当下这一层判断。",
    ],
  },
  {
    title: "发布会页面的节奏：留白、冲击点与转场",
    meta: "Launch / Keynote",
    body: [
      "发布会页面不只是单张画面的漂亮程度，更重要的是整场演示是否有呼吸感。留白让观众有时间理解，冲击点负责制造记忆，转场则决定情绪能否顺畅推进。",
      "在做 Keynote 或大屏发布会时，我会把页面分成铺垫、强调、释放几种节奏。不是每一页都需要强刺激，真正重要的瞬间，往往需要前后页面共同托举出来。",
      "好的节奏会让信息显得更自信。该安静时安静，该放大时放大，让观众在不知不觉中跟上讲述者的速度。",
    ],
  },
  {
    title: "从品牌资产到演示系统的视觉一致性",
    meta: "Brand / Template system",
    body: [
      "品牌资产进入演示场景后，不能只停留在 logo、颜色和字体的套用。真正稳定的演示系统，需要回答的是：当内容不断变化时，视觉规则是否仍然清晰、可靠且好用。",
      "我通常会先建立标题层级、版式比例、图文关系、数据呈现方式与转场语法。这些规则像一套隐形秩序，帮助不同页面在保持变化的同时，依然属于同一个品牌语境。",
      "一致性不是让所有页面长得一样，而是让每一页即使承担不同任务，也拥有相同的判断标准与气质。",
    ],
  },
];

const workGrid = byId("workGrid");
const dialog = byId("projectDialog");
const dialogTitle = byId("dialogTitle");
const dialogMeta = byId("dialogMeta");
const dialogDesc = byId("dialogDesc");
const galleryGrid = byId("galleryGrid");
const journalDialog = byId("journalDialog");
const journalDialogTitle = byId("journalDialogTitle");
const journalDialogMeta = byId("journalDialogMeta");
const journalDialogContent = byId("journalDialogContent");
const imageDialog = byId("imageDialog");
const imageDialogImage = byId("imageDialogImage");
const imageNavButtons = document.querySelectorAll(".image-nav");
const header = document.querySelector(".site-header");
const headerSentinel = document.querySelector(".header-sentinel");
const journalGrid = document.querySelector(".journal-grid");

let activeImageProjectIndex = 0;
let activeImageIndex = 0;
let imageTouchStartX = 0;
let imageTouchStartY = 0;

function workCardClass(index, filter) {
  if (filter !== "all") {
    return "work-card";
  }

  return index % 5 === 0 ? "work-card work-card-large" : "work-card";
}

function renderProjects(filter = "all") {
  const visibleProjects =
    filter === "all" ? projects : projects.filter((project) => project.tags.includes(filter));

  if (!visibleProjects.length) {
    workGrid.innerHTML = '<div class="empty-state">这个分类下暂时没有可展示的项目。</div>';
    return;
  }

  workGrid.innerHTML = visibleProjects
    .map(
      (project, index) => `
        <article class="${workCardClass(index, filter)}" data-index="${projects.indexOf(project)}" tabindex="0" data-reveal>
          <div class="work-preview">
            <img class="work-thumb" src="${project.cover}" alt="${project.title}" loading="${index < 3 ? "eager" : "lazy"}" decoding="async" />
          </div>
          <div class="work-body">
            <div class="work-topline">
              <span class="work-meta">${project.category}</span>
              <span class="work-count">${String(project.images.length).padStart(2, "0")} pages</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          </div>
        </article>
      `,
    )
    .join("");

  setupReveal();
}

function openProject(project) {
  dialogTitle.textContent = project.title;
  dialogMeta.textContent = `${project.year} / ${project.category}`;
  dialogDesc.textContent = project.description;
  galleryGrid.innerHTML = project.images
    .map(
      (image, index) => `
        <button class="gallery-image-button" type="button" data-image-index="${index}" aria-label="打开第 ${index + 1} 张图片">
          <img src="${image}" alt="${project.title} 第 ${index + 1} 张" loading="lazy" decoding="async" />
        </button>
      `,
    )
    .join("");
  galleryGrid.dataset.projectIndex = projects.indexOf(project);
  dialog.showModal();
}

function openJournal(journal) {
  journalDialogTitle.textContent = journal.title;
  journalDialogMeta.textContent = journal.meta;
  journalDialogContent.innerHTML = journal.body.map((paragraph) => `<p>${paragraph}</p>`).join("");
  journalDialog.showModal();
}

function setImagePreview(projectIndex, imageIndex) {
  const project = projects[projectIndex];
  if (!project) return;

  activeImageProjectIndex = projectIndex;
  activeImageIndex = (imageIndex + project.images.length) % project.images.length;
  imageDialogImage.src = project.images[activeImageIndex];
  imageDialogImage.alt = `${project.title} 第 ${activeImageIndex + 1} 张`;
}

function openImage(projectIndex, imageIndex) {
  setImagePreview(projectIndex, imageIndex);
  imageDialog.showModal();
}

function showImageByOffset(offset) {
  const project = projects[activeImageProjectIndex];
  if (!project) return;
  setImagePreview(activeImageProjectIndex, activeImageIndex + offset);
}

function setupReveal() {
  const revealNodes = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.15 },
  );

  revealNodes.forEach((node) => {
    if (node.classList.contains("is-visible")) return;
    observer.observe(node);
  });
}

renderProjects();
setupReveal();

if ("IntersectionObserver" in window && headerSentinel) {
  const headerObserver = new IntersectionObserver(
    ([entry]) => {
      header.classList.toggle("is-scrolled", !entry.isIntersecting);
    },
    { rootMargin: "-24px 0px 0px 0px", threshold: 0 },
  );

  headerObserver.observe(headerSentinel);
} else {
  header.classList.add("is-scrolled");
}

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderProjects(button.dataset.filter);
  });
});

workGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".work-card");
  if (!card) return;
  openProject(projects[Number(card.dataset.index)]);
});

workGrid.addEventListener("keydown", (event) => {
  if (!["Enter", " "].includes(event.key)) return;
  const card = event.target.closest(".work-card");
  if (!card) return;
  event.preventDefault();
  openProject(projects[Number(card.dataset.index)]);
});

galleryGrid.addEventListener("click", (event) => {
  const imageButton = event.target.closest(".gallery-image-button");
  if (!imageButton) return;
  openImage(Number(galleryGrid.dataset.projectIndex), Number(imageButton.dataset.imageIndex));
});

journalGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".journal-card");
  if (!card) return;
  openJournal(journals[Number(card.dataset.journalIndex)]);
});

journalGrid.addEventListener("keydown", (event) => {
  if (!["Enter", " "].includes(event.key)) return;
  const card = event.target.closest(".journal-card");
  if (!card) return;
  event.preventDefault();
  openJournal(journals[Number(card.dataset.journalIndex)]);
});

imageNavButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showImageByOffset(Number(button.dataset.direction));
  });
});

imageDialog.addEventListener(
  "touchstart",
  (event) => {
    const touch = event.changedTouches[0];
    imageTouchStartX = touch.clientX;
    imageTouchStartY = touch.clientY;
  },
  { passive: true },
);

imageDialog.addEventListener(
  "touchend",
  (event) => {
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - imageTouchStartX;
    const deltaY = touch.clientY - imageTouchStartY;
    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) return;
    showImageByOffset(deltaX < 0 ? 1 : -1);
  },
  { passive: true },
);

document.addEventListener("keydown", (event) => {
  if (imageDialog.open && ["ArrowLeft", "ArrowRight"].includes(event.key)) {
    event.preventDefault();
    showImageByOffset(event.key === "ArrowRight" ? 1 : -1);
    return;
  }

  if (event.key === "Escape") {
    if (imageDialog.open) imageDialog.close();
    if (dialog.open) dialog.close();
    if (journalDialog.open) journalDialog.close();
  }
});

document.querySelectorAll(".dialog-close").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog").close());
});

document.querySelectorAll("dialog").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    const rect = modal.getBoundingClientRect();
    const isBackdrop =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;

    if (isBackdrop) {
      modal.close();
    }
  });
});

imageDialog.addEventListener("close", () => {
  imageDialogImage.removeAttribute("src");
  imageDialogImage.removeAttribute("alt");
});
