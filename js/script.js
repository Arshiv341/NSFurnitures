/**
 * ============================================================================
 *                         NS FURNITURE - MAIN SCRIPT
 * ============================================================================
 */

// 1. Centralized Business Information
const businessInfo = {
  name: "NS Furniture",
  phone: "9311547715",
  whatsapp: "9311547715",
  email: "Furniturens2@gmail.com",
  facebook: "https://www.facebook.com/share/1CNWErMguK/",
  address: "NS Furnitures Gaur City 2 in front of TRG Mall , Near Gurudwara Noida Uttar Pradesh",
  hours: "Mon - Sat: 9:00 AM - 8:00 PM",
  serviceAreas: "Delhi NCR, Noida, Gurgaon, Ghaziabad and surrounding regions"
};

// 2. Centralized Image Configurations
const images = {
  logo: "assets/logo.jpeg",
  hero: {
    sofa: "assets/NS/IMG-20260819-WA0033.jpg",
    boy: "assets/NS/IMG-20260819-WA0025.jpg",
    girl: "assets/NS/IMG-20260819-WA0024.jpg",
    background: "assets/NS/IMG-20260819-WA0029.jpg"
  },
  about: "assets/NS/IMG-20260819-WA0027.jpg",
  services: {
    sofaRepair: "assets/NS/IMG-20260819-WA0011.jpg",
    upholstery: "assets/NS/IMG-20260819-WA0014.jpg",
    polishing: "assets/NS/IMG-20260819-WA0037.jpg",
    woodenRepair: "assets/NS/IMG-20260819-WA0009.jpg",
    chairRepair: "assets/NS/IMG-20260819-WA0015.jpg",
    bedRepair: "assets/NS/IMG-20260819-WA0045.jpg",
    wardrobe: "assets/NS/IMG-20260819-WA0040.jpg",
    customFurniture: "assets/NS/IMG-20260819-WA0013.jpg"
  },
  beforeAfter: {
    before: "assets/NS/IMG-20260819-WA0019.jpg",
    after: "assets/NS/IMG-20260819-WA0011.jpg"
  },
  testimonials: [
    "assets/NS/IMG-20260819-WA0024.jpg",
    "assets/NS/IMG-20260819-WA0049.jpg",
    "assets/NS/IMG-20260819-WA0048.jpg"
  ]
};

// 3. Centralized Library Dataset (55 Unique Verified Assets)
const libraryItems = (typeof nsLibraryItems !== 'undefined') ? nsLibraryItems : [
{
    id: "lib_1",
    image: "assets/NS/IMG-20260819-WA0007.jpg",
    category: "restoration",
    title: "Before & After Sofa Upholstery",
    alt: "Before and after sofa upholstery repair of fabric sectional by NS Furniture"
  },
  {
    id: "lib_2",
    image: "assets/NS/IMG-20260819-WA0008.jpg",
    category: "beds",
    title: "Bed Frame Assembly",
    alt: "Custom button-tufted wingback bed frame assembly in workshop by NS Furniture"
  },
  {
    id: "lib_3",
    image: "assets/NS/IMG-20260819-WA0009.jpg",
    category: "chairs",
    title: "Curved Chair Skeleton",
    alt: "Traditional curved wooden dining chair skeleton frame woodwork by NS Furniture"
  },
  {
    id: "lib_4",
    image: "assets/NS/IMG-20260819-WA0010.jpg",
    category: "restoration",
    title: "Before & After Leatherette Sofa",
    alt: "Worn couch restored with premium tan leatherette upholstery by NS Furniture"
  },
  {
    id: "lib_5",
    image: "assets/NS/IMG-20260819-WA0011.jpg",
    category: "sofas",
    title: "Teal & Beige Sectional Sofa",
    alt: "Completed dual-tone L-shape fabric sectional sofa in Noida home by NS Furniture"
  },
  {
    id: "lib_6",
    image: "assets/NS/IMG-20260819-WA0012.jpg",
    category: "restoration",
    title: "Before & After Chesterfield Sofa",
    alt: "Chesterfield sofa upholstery restoration to dusty rose velvet finish by NS Furniture"
  },
  {
    id: "lib_7",
    image: "assets/NS/IMG-20260819-WA0013.jpg",
    category: "custom-furniture",
    title: "Velvet Daybed & Sofa Set",
    alt: "Custom sky blue velvet sofa bench and L-shape sectional set by NS Furniture"
  },
  {
    id: "lib_8",
    image: "assets/NS/IMG-20260819-WA0014.jpg",
    category: "upholstery",
    title: "Chesterfield Button-Tufting Work",
    alt: "Craftsman performing deep button tufting on grey chesterfield sofa back by NS Furniture"
  },
  {
    id: "lib_9",
    image: "assets/NS/IMG-20260819-WA0015.jpg",
    category: "chairs",
    title: "Green Leather Recliner Sofa",
    alt: "Green leatherette 3-seater recliner sofa cushion restoration by NS Furniture"
  },
  {
    id: "lib_10",
    image: "assets/NS/IMG-20260819-WA0017.jpg",
    category: "woodwork",
    title: "Classical Sofa Frame Skeleton",
    alt: "Handcrafted curved wooden structural frame skeleton for classical sofa by NS Furniture"
  },
  {
    id: "lib_11",
    image: "assets/NS/IMG-20260819-WA0018.jpg",
    category: "tables",
    title: "Custom Brown Fabric Sofa & Table",
    alt: "Brown L-shape fabric sofa set and matching wooden glass coffee table by NS Furniture"
  },
  {
    id: "lib_12",
    image: "assets/NS/IMG-20260819-WA0019.jpg",
    category: "upholstery",
    title: "Sofa Inner Webbing Support",
    alt: "Heavy duty elastic webbing bands installed on wooden sofa frame by NS Furniture"
  },
  {
    id: "lib_13",
    image: "assets/NS/IMG-20260819-WA0020.jpg",
    category: "chairs",
    title: "Recliner Cushion Repair",
    alt: "Finished cream leatherette single recliner armchair restoration by NS Furniture"
  },
  {
    id: "lib_14",
    image: "assets/NS/IMG-20260819-WA0021.jpg",
    category: "sofas",
    title: "Modern Grey Chesterfield Suite",
    alt: "Modern grey chesterfield living room sofa set in Delhi NCR home by NS Furniture"
  },
  {
    id: "lib_15",
    image: "assets/NS/IMG-20260819-WA0022.jpg",
    category: "upholstery",
    title: "Channeled Sofa Back",
    alt: "Vertical channeled fabric sofa back cushion padding alignment by NS Furniture"
  },
  {
    id: "lib_16",
    image: "assets/NS/IMG-20260819-WA0023.jpg",
    category: "sofas",
    title: "Contemporary Slate Sofa Set",
    alt: "Textured slate grey sectional living room sofa set by NS Furniture"
  },
  {
    id: "lib_17",
    image: "assets/NS/IMG-20260819-WA0024.jpg",
    category: "sofas",
    title: "Delivered Turquoise Sofa Set",
    alt: "Happy client thumbs up on turquoise tufted sofa delivery in Noida by NS Furniture"
  },
  {
    id: "lib_18",
    image: "assets/NS/IMG-20260819-WA0025.jpg",
    category: "beds",
    title: "Headboard Panel Installation",
    alt: "Installing custom grey velvet padded wall headboard panels by NS Furniture"
  },
  {
    id: "lib_19",
    image: "assets/NS/IMG-20260819-WA0026.jpg",
    category: "sofas",
    title: "Modern Blue Fabric Sectional",
    alt: "L-shape royal blue fabric sectional sofa with cushions in Gurgaon home by NS Furniture"
  },
  {
    id: "lib_20",
    image: "assets/NS/IMG-20260819-WA0027.jpg",
    category: "sofas",
    title: "Handcrafted Sofa Showcase",
    alt: "Artisan sitting on completed tufted turquoise chesterfield sofa by NS Furniture"
  },
  {
    id: "lib_21",
    image: "assets/NS/IMG-20260819-WA0028.jpg",
    category: "upholstery",
    title: "Burgundy Velvet Sofa Back",
    alt: "Back profile upholstery detail of a plush red velvet sofa by NS Furniture"
  },
  {
    id: "lib_22",
    image: "assets/NS/IMG-20260819-WA0029.jpg",
    category: "beds",
    title: "Premium Upholstered Bed Set",
    alt: "Master bedroom with custom grey velvet bed frame and headboard by NS Furniture"
  },
  {
    id: "lib_23",
    image: "assets/NS/IMG-20260819-WA0030.jpg",
    category: "sofas",
    title: "Family Sectional Sofa",
    alt: "Comfortable grey sectional sofa with cushions in living room by NS Furniture"
  },
  {
    id: "lib_24",
    image: "assets/NS/IMG-20260819-WA0031.jpg",
    category: "sofas",
    title: "Teal Velvet Lounge Suite",
    alt: "Teal velvet sofas and wrapped wingback accent chair set by NS Furniture"
  },
  {
    id: "lib_25",
    image: "assets/NS/IMG-20260819-WA0032.jpg",
    category: "beds",
    title: "Triangular Fabric Wall Panels",
    alt: "Geometric custom velvet wall padding and panels behind bed by NS Furniture"
  },
  {
    id: "lib_26",
    image: "assets/NS/IMG-20260819-WA0033.jpg",
    category: "sofas",
    title: "Charcoal & Violet Chesterfield Set",
    alt: "Deep button-tufted charcoal and violet chesterfield sofas by NS Furniture"
  },
  {
    id: "lib_27",
    image: "assets/NS/IMG-20260819-WA0034.jpg",
    category: "sofas",
    title: "Classical Tufted Sofa",
    alt: "Classic beige leatherette sofa with gold-finish carved wood trim by NS Furniture"
  },
  {
    id: "lib_28",
    image: "assets/NS/IMG-20260819-WA0035.jpg",
    category: "sofas",
    title: "Chesterfield Sofa Polish",
    alt: "Polishing of wood trims on beige tufted chesterfield sofa by NS Furniture"
  },
  {
    id: "lib_29",
    image: "assets/NS/IMG-20260819-WA0036.jpg",
    category: "sofas",
    title: "Adjustable Headrest Sectional",
    alt: "Grey fabric corner sectional sofa with modern adjustable headrests by NS Furniture"
  },
  {
    id: "lib_30",
    image: "assets/NS/IMG-20260819-WA0037.jpg",
    category: "polishing",
    title: "Emerald Velvet Chaise Lounge",
    alt: "Emerald velvet chaise lounge showing high-gloss polished wooden legs by NS Furniture"
  },
  {
    id: "lib_31",
    image: "assets/NS/IMG-20260819-WA0038.jpg",
    category: "sofas",
    title: "Teal Sofa & Storage Poufs",
    alt: "Teal velvet corner sofa with matching round storage poufs by NS Furniture"
  },
  {
    id: "lib_32",
    image: "assets/NS/IMG-20260819-WA0039.jpg",
    category: "tables",
    title: "Black Leatherette Sectional & Table",
    alt: "Modern black leatherette L-shape sofa and glass tabletop coffee table by NS Furniture"
  },
  {
    id: "lib_33",
    image: "assets/NS/IMG-20260819-WA0040.jpg",
    category: "wardrobes",
    title: "Bedside Wardrobe & Headboard",
    alt: "Modern wardrobes cabinetry integrated with vertical headboard panels by NS Furniture"
  },
  {
    id: "lib_34",
    image: "assets/NS/IMG-20260819-WA0041.jpg",
    category: "sofas",
    title: "Dual-Color Sofa Collection",
    alt: "Teal 2-seater and beige 3-seater minimalist fabric sofas by NS Furniture"
  },
  {
    id: "lib_35",
    image: "assets/NS/IMG-20260819-WA0042.jpg",
    category: "tables",
    title: "Grey-Blue Sectional & Table",
    alt: "Spacious grey-blue fabric sectional sofa and glass coffee table by NS Furniture"
  },
  {
    id: "lib_36",
    image: "assets/NS/IMG-20260819-WA0043.jpg",
    category: "custom-furniture",
    title: "Sofa & Yellow Velvet Daybed",
    alt: "Grey fabric sectional and custom contrast yellow velvet daybed sofa by NS Furniture"
  },
  {
    id: "lib_37",
    image: "assets/NS/IMG-20260819-WA0044.jpg",
    category: "beds",
    title: "Diagonal Geometric Headboard",
    alt: "Custom brown velvet diagonal geometric padded headboard with side tables by NS Furniture"
  },
  {
    id: "lib_38",
    image: "assets/NS/IMG-20260819-WA0045.jpg",
    category: "beds",
    title: "Diamond-Tufted Headboard Work",
    alt: "Diamond tufting alignment check on brown leather headboard in shop by NS Furniture"
  },
  {
    id: "lib_39",
    image: "assets/NS/IMG-20260819-WA0046.jpg",
    category: "beds",
    title: "Vertical Channeled Bed Build",
    alt: "Beige fabric vertical channeled headboard bed frame assembly by NS Furniture"
  },
  {
    id: "lib_40",
    image: "assets/NS/IMG-20260819-WA0048.jpg",
    category: "sofas",
    title: "Royal Blue Chesterfield Sofa",
    alt: "Royal blue velvet chesterfield sofa deep button tufting detail by NS Furniture"
  },
  {
    id: "lib_41",
    image: "assets/NS/IMG-20260819-WA0049.jpg",
    category: "sofas",
    title: "Lime Green Fabric Sofa",
    alt: "Completed lime green fabric 3-seater sofa and matching armchair by NS Furniture"
  },
  {
    id: "lib_42",
    image: "assets/NS/IMG-20260819-WA0050.jpg",
    category: "sofas",
    title: "Modern Grey 3-Seater Sofa",
    alt: "Minimalist grey fabric 3-seater sofa with tapered wooden legs by NS Furniture"
  },
  {
    id: "lib_43",
    image: "assets/NS/IMG-20260819-WA0051.jpg",
    category: "sofas",
    title: "Lime Green Living Room Set",
    alt: "Lime green fabric sofas styled with custom peacock prints by NS Furniture"
  },
  {
    id: "lib_44",
    image: "assets/NS/IMG-20260819-WA0052.jpg",
    category: "sofas",
    title: "Sky Blue Velvet Sofa Set",
    alt: "Sky blue velvet scroll arm classic sofa set in residential room by NS Furniture"
  },
  {
    id: "lib_45",
    image: "assets/NS/IMG-20260819-WA0053.jpg",
    category: "tables",
    title: "Brown & Beige Sofa & Table",
    alt: "Suede fabric L-shape sectional sofa and glass coffee table by NS Furniture"
  },
  {
    id: "lib_46",
    image: "assets/NS/IMG-20260819-WA0054.jpg",
    category: "beds",
    title: "Pink Velvet Bed Frame",
    alt: "Custom vertical channeled pink velvet upholstered bed frame wrapped for shipping by NS Furniture"
  },
  {
    id: "lib_47",
    image: "assets/NS/IMG-20260819-WA0055.jpg",
    category: "custom-furniture",
    title: "Grey Velvet Chesterfield Daybed",
    alt: "Grey velvet button-tufted daybed couch with brass studs detailing by NS Furniture"
  },
  {
    id: "lib_48",
    image: "assets/NS/IMG-20260819-WA0056.jpg",
    category: "sofas",
    title: "Salmon Pink Sectional Sofa",
    alt: "Plush salmon pink velvet corner sofa on the carpentry workshop floor by NS Furniture"
  },
  {
    id: "lib_49",
    image: "assets/NS/IMG-20260819-WA0057.jpg",
    category: "beds",
    title: "Grey Upholstered Bed Base",
    alt: "Grey velvet padded bed base and panel headboard in master bedroom by NS Furniture"
  },
  {
    id: "lib_50",
    image: "assets/NS/IMG-20260819-WA0058.jpg",
    category: "beds",
    title: "Teal Velvet Bed Frame",
    alt: "Vertical channeled teal velvet upholstered bed frame carpentry woodwork by NS Furniture"
  },
  {
    id: "lib_51",
    image: "assets/NS/IMG-20260819-WA0059.jpg",
    category: "sofas",
    title: "Floral Print Teal Sofa",
    alt: "Teal fabric floral print custom upholstered sofa with gold legs by NS Furniture"
  },
  {
    id: "lib_52",
    image: "assets/NS/IMG-20260819-WA0060.jpg",
    category: "sofas",
    title: "Custom Modern Couch Polish",
    alt: "Polishing of wobbly modern couch frame structure by NS Furniture"
  },
  {
    id: "lib_53",
    image: "assets/NS/IMG-20260819-WA0061.jpg",
    category: "sofas",
    title: "Slate Blue Sectional Sofa",
    alt: "Slate navy corner sectional sofa set with matching square footstool by NS Furniture"
  },
  {
    id: "lib_54",
    image: "assets/NS/IMG-20260819-WA0062.jpg",
    category: "sofas",
    title: "Rust & Brown Corner Sofa",
    alt: "Dual-tone fabric corner sectional sofa set with matching poufs by NS Furniture"
  },
  {
    id: "lib_55",
    image: "assets/NS/IMG-20260819-WA0063.jpg",
    category: "sofas",
    title: "Beige Suede Corner Sectional",
    alt: "Beige suede L-shape corner sectional with matching storage cubes by NS Furniture"
  },
  {
    id: "lib_56",
    image: "assets/NS/IMG-20260819-WA0064.jpg",
    category: "sofas",
    title: "Classic Velvet Upholstery Work",
    alt: "Aligning tufted details on classic velvet sofa frame by NS Furniture"
  },
  {
    id: "lib_57",
    image: "assets/NS/IMG-20260819-WA0065.jpg",
    category: "sofas",
    title: "Off-White Channeled Sofa Suite",
    alt: "Off-white fabric vertical channeled sofas in bright living room setup by NS Furniture"
  },
  {
    id: "lib_58",
    image: "assets/NS/IMG-20260819-WA0066.jpg",
    category: "sofas",
    title: "Teal Sectional & Gold Pillows",
    alt: "Teal fabric sectional sofa styled with gold accent cushions by NS Furniture"
  },
];

// 4. Centralized Business Stats / Metrics (Non-fake values: hide section if placeholders)
const stats = {
  experience: "XX+",
  projects: "XXX+",
  customers: "XXX+",
  services: "XX"
};

// 5. Centralized EmailJS Configurations
const EMAILJS_CONFIG = {
  publicKey: "7z4Q5-hpK7QuCsxxT",
  serviceId: "service_4d1txf5",
  templateId: "template_y2hff48"
};

/**
 * ============================================================================
 *                 INTERACTIVE INTERFACE SCRIPT IMPLEMENTATION
 * ============================================================================
 */

function initApp() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  initNavigation();
  initImageFallbacks();
  initBusinessCredentials();
  injectStructuredData();
  
  if (!prefersReducedMotion) {
    initHero3DParallax();
    initScrollReveals();
  } else {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("reveal-visible"));
  }

  initBeforeAfterSlider();
  initSofa3DCard();
  initGalleryFilterAndLightbox();
  initTestimonialsSlider();
  initEmailJSForm();
  initBackToTopButton();
  initMagneticCTAButtons();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// Helper to access nested object keys dynamically (e.g. "hero.sofa")
function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, part) => {
    return acc && acc[part] !== undefined ? acc[part] : null;
  }, obj);
}

/**
 * 1. Global Navigation and Mobile Burger Menu
 */
function initNavigation() {
  const header = document.querySelector(".header-main");
  const burger = document.querySelector(".navbar-burger");
  const drawer = document.querySelector(".mobile-nav-drawer");
  const scrollBar = document.querySelector(".scroll-progress-bar");

  // Sticky Header scroll styling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }

    // Update progress bar
    if (scrollBar) {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      scrollBar.style.width = `${progress}%`;
    }
  });

  // Mobile Drawer Toggle Actions
  if (burger && drawer) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("burger-active");
      drawer.classList.toggle("drawer-active");
      document.body.style.overflow = drawer.classList.contains("drawer-active") ? "hidden" : "";
    });

    // Close mobile drawer when clicking navigation link items
    const links = drawer.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        burger.classList.remove("burger-active");
        drawer.classList.remove("drawer-active");
        document.body.style.overflow = "";
      });
    });
  }
}

/**
 * 2. Resolve Config-Driven Image URLs or Inject Clean SVG/CSS Placeholders
 */
function initImageFallbacks() {
  const elementsToLoad = document.querySelectorAll("[data-img-key]");
  
  elementsToLoad.forEach(el => {
    const keyPath = el.getAttribute("data-img-key");
    const url = getNestedValue(images, keyPath);
    const isPlaceholder = !url || url.startsWith("PASTE_") || url.trim() === "";

    if (el.tagName === "IMG") {
      if (isPlaceholder) {
        const altText = el.getAttribute("alt") || "Furniture Asset";
        const wrapper = el.parentElement;
        
        const placeholderDiv = document.createElement("div");
        placeholderDiv.className = el.className + " premium-image-placeholder";
        
        let icon = "fa-couch";
        if (altText.toLowerCase().includes("boy")) icon = "fa-user-cog";
        else if (altText.toLowerCase().includes("girl")) icon = "fa-user-check";
        else if (altText.toLowerCase().includes("polishing")) icon = "fa-paint-roller";
        else if (altText.toLowerCase().includes("wooden")) icon = "fa-hammer";
        else if (altText.toLowerCase().includes("chair")) icon = "fa-chair";
        else if (altText.toLowerCase().includes("bed")) icon = "fa-bed";
        else if (altText.toLowerCase().includes("wardrobe") || altText.toLowerCase().includes("cabinet")) icon = "fa-columns";
        else if (altText.toLowerCase().includes("before")) icon = "fa-history";
        else if (altText.toLowerCase().includes("after")) icon = "fa-magic";
        else if (altText.toLowerCase().includes("logo")) icon = "fa-tools";
        
        placeholderDiv.innerHTML = `
          <div class="placeholder-skeleton-inner">
            <i class="fas ${icon} placeholder-icon"></i>
            <span class="placeholder-text">${altText}</span>
          </div>
        `;
        
        el.style.display = "none";
        wrapper.appendChild(placeholderDiv);
      } else {
        el.src = url;
      }
    } else {
      if (!isPlaceholder) {
        el.style.backgroundImage = `url('${url}')`;
      }
    }
  });
}

/**
 * 3. Bind Business Info dynamically across DOM elements
 */
function initBusinessCredentials() {
  document.querySelectorAll("[data-business-name]").forEach(el => el.innerText = businessInfo.name);
  document.querySelectorAll("[data-business-address]").forEach(el => el.innerText = businessInfo.address);
  document.querySelectorAll("[data-business-hours]").forEach(el => el.innerText = businessInfo.hours);
  document.querySelectorAll("[data-business-areas]").forEach(el => el.innerText = businessInfo.serviceAreas);
  
  // Format WhatsApp Link
  document.querySelectorAll("[data-business-whatsapp]").forEach(el => {
    el.href = `https://wa.me/91${businessInfo.whatsapp}?text=Hi%20NS%20Furniture%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20furniture%20repair.`;
  });

  // Format Phone Link
  document.querySelectorAll("[data-business-phone]").forEach(el => {
    el.href = `tel:+91${businessInfo.phone}`;
    if (el.tagName !== "A") el.innerText = `+91 ${businessInfo.phone.slice(0, 5)} ${businessInfo.phone.slice(5)}`;
  });

  // Format Email Link
  document.querySelectorAll("[data-business-email]").forEach(el => {
    el.href = `mailto:${businessInfo.email}`;
    if (el.tagName !== "A") el.innerText = businessInfo.email;
  });

  // Format Facebook Link
  document.querySelectorAll("[data-business-facebook]").forEach(el => {
    el.href = businessInfo.facebook;
  });

  // Render Stats details (Hide stats counters section if placeholder is active)
  const statsSection = document.querySelector(".stats-main");
  if (statsSection) {
    const isPlaceholder = stats.experience.includes("X") || stats.projects.includes("X") || stats.customers.includes("X");
    if (isPlaceholder) {
      statsSection.style.display = "none";
    } else {
      document.querySelectorAll("[data-stat]").forEach(el => {
        const key = el.getAttribute("data-stat");
        el.innerText = stats[key] || "";
      });
    }
  }
}

/**
 * 4. JSON-LD Dynamic Schema Injections for SEO
 */
function injectStructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NS Furniture",
    "url": window.location.origin
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    "name": "NS Furniture",
    "image": window.location.origin + "/assets/logo.jpeg",
    "@id": window.location.origin + "/#furniturestore",
    "url": window.location.origin,
    "telephone": "+91" + businessInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.address,
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Delhi" },
      { "@type": "AdministrativeArea", "name": "Noida" },
      { "@type": "AdministrativeArea", "name": "Gurgaon" },
      { "@type": "AdministrativeArea", "name": "Ghaziabad" },
      { "@type": "AdministrativeArea", "name": "Delhi NCR" }
    ]
  };

  const breadcrumbs = [];
  const path = window.location.pathname.split("/").filter(Boolean);
  breadcrumbs.push({
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": window.location.origin + "/index.html"
  });
  
  if (path.length > 0 && !path[0].includes("index")) {
    const pageName = path[0].replace(".html", "").charAt(0).toUpperCase() + path[0].replace(".html", "").slice(1);
    breadcrumbs.push({
      "@type": "ListItem",
      "position": 2,
      "name": pageName,
      "item": window.location.href
    });
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs
  };

  const injectScript = (data) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  };

  injectScript(websiteSchema);
  injectScript(localBusinessSchema);
  injectScript(breadcrumbSchema);
}

/**
 * 5. Advanced 3D Interactive Parallax Hero Calculations
 */
function initHero3DParallax() {
  const wrapper = document.querySelector(".hero-3d-scene-wrap");
  const scene = document.querySelector(".hero-3d-scene");
  
  const layerBg = document.querySelector(".hero-3d-bg");
  const layerBoy = document.querySelector(".hero-3d-boy");
  const layerGirl = document.querySelector(".hero-3d-girl");
  const layerSofa = document.querySelector(".hero-3d-sofa");

  if (!wrapper || !scene) return;

  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;
  const lerpFactor = 0.08;

  window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = (e.clientY / window.innerHeight) * 2 - 1;
  });

  let floatOffset = 0;

  function updateParallax() {
    currentX += (mouseX - currentX) * lerpFactor;
    currentY += (mouseY - currentY) * lerpFactor;

    const rotX = -currentY * 12;
    const rotY = currentX * 15;
    
    floatOffset += 0.02;
    const floatY = Math.sin(floatOffset) * 8;
    const floatSofaY = Math.cos(floatOffset) * 10;
    
    if (layerBg) {
      layerBg.style.transform = `translate3d(${-currentX * 15}px, ${-currentY * 15}px, -200px)`;
    }
    if (layerBoy) {
      layerBoy.style.transform = `translate3d(${currentX * 25}px, ${currentY * 25 + floatY}px, 50px)`;
    }
    if (layerGirl) {
      layerGirl.style.transform = `translate3d(${currentX * 35}px, ${currentY * 35 - floatY}px, 90px)`;
    }
    if (layerSofa) {
      layerSofa.style.transform = `translate3d(${currentX * 50}px, ${currentY * 50 + floatSofaY}px, 140px) rotateY(${-currentX * 10}deg)`;
    }

    scene.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    requestAnimationFrame(updateParallax);
  }

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      scene.style.transform = "";
      wrapper.style.perspective = "1200px";
    } else {
      scene.style.transform = "none";
      wrapper.style.perspective = "none";
    }
  };

  window.addEventListener("resize", handleResize);
  handleResize();
  requestAnimationFrame(updateParallax);
}

/**
 * 6. IntersectionObserver-driven Section Scroll Reveals
 */
function initScrollReveals() {
  const revealElements = document.querySelectorAll(".reveal");
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/**
 * 7. Interactive Before/After Comparison Drag Slider
 */
function initBeforeAfterSlider() {
  const sliders = document.querySelectorAll(".before-after-slider");

  sliders.forEach(slider => {
    const handle = slider.querySelector(".slider-handle");
    const foreground = slider.querySelector(".after-image-wrapper");
    
    if (!handle || !foreground) return;

    const imgBefore = slider.querySelector(".before-img");
    const imgAfter = slider.querySelector(".after-img");
    
    const beforeUrl = images.beforeAfter.before;
    const afterUrl = images.beforeAfter.after;

    if (imgBefore && beforeUrl && !beforeUrl.startsWith("PASTE_")) imgBefore.src = beforeUrl;
    if (imgAfter && afterUrl && !afterUrl.startsWith("PASTE_")) imgAfter.src = afterUrl;

    let active = false;

    const moveSlider = (x) => {
      const rect = slider.getBoundingClientRect();
      let position = ((x - rect.left) / rect.width) * 100;
      
      if (position < 0) position = 0;
      if (position > 100) position = 100;

      foreground.style.width = `${position}%`;
      handle.style.left = `${position}%`;
    };

    slider.addEventListener("mousedown", () => active = true);
    window.addEventListener("mouseup", () => active = false);
    slider.addEventListener("mousemove", (e) => {
      if (!active) return;
      moveSlider(e.clientX);
    });

    slider.addEventListener("touchstart", () => active = true);
    window.addEventListener("touchend", () => active = false);
    slider.addEventListener("touchmove", (e) => {
      if (!active) return;
      moveSlider(e.touches[0].clientX);
    });

    slider.addEventListener("click", (e) => {
      if (e.target === handle || handle.contains(e.target)) return;
      moveSlider(e.clientX);
    });
  });
}

/**
 * 8. Custom Sofa 3D Interactive Card Showcase
 */
function initSofa3DCard() {
  const container = document.querySelector(".sofa-3d-wrap");
  const card = document.querySelector(".sofa-3d-card");
  const labels = document.querySelectorAll(".floating-badge");
  
  if (!container || !card) return;

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const rotateX = -((y / rect.height) - 0.5) * 20;
    const rotateY = ((x / rect.width) - 0.5) * 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    labels.forEach((label, index) => {
      const speed = (index + 1) * 8;
      const offsetX = ((x / rect.width) - 0.5) * speed;
      const offsetY = ((y / rect.height) - 0.5) * speed;
      label.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 30px)`;
    });
  });

  container.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    labels.forEach(label => {
      label.style.transform = "translate3d(0, 0, 0)";
    });
  });
}

/**
 * 9. Library Masonry Grid Filters, Real-Time Search, and Lightbox
 */
function initGalleryFilterAndLightbox() {
  const grid = document.querySelector(".gallery-grid");
  const filters = document.querySelectorAll(".gallery-filter-btn");
  const searchInput = document.getElementById("library-search-input");
  
  if (!grid) return;

  console.log(`NS Furniture: Hydrating library grid with ${libraryItems.length} items.`);

  // Hydrate all library portfolio items from the libraryItems dataset
  grid.innerHTML = "";
  libraryItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "gallery-item";
    card.setAttribute("data-category", item.category);
    
    const displayCategory = item.category.replace("-", " ").charAt(0).toUpperCase() + item.category.replace("-", " ").slice(1);
    
    card.innerHTML = `
      <div class="gallery-item-img">
        <img src="${item.image}" alt="${item.alt}" loading="lazy">
        <div class="gallery-item-overlay">
          <i class="fas fa-search-plus"></i>
        </div>
      </div>
      <div class="gallery-item-info">
        <h4>${item.title}</h4>
        <p>${displayCategory}</p>
      </div>
    `;
    grid.appendChild(card);
  });

  // Filter functionality
  const applyFilters = () => {
    const activeFilter = document.querySelector(".gallery-filter-btn.active-filter");
    const activeCategory = activeFilter ? activeFilter.getAttribute("data-category") : "all";
    const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const items = grid.querySelectorAll(".gallery-item");

    items.forEach(item => {
      const itemCat = item.getAttribute("data-category");
      const title = item.querySelector("h4").innerText.toLowerCase();
      
      const matchesCategory = activeCategory === "all" || itemCat === activeCategory;
      const matchesSearch = title.includes(searchQuery) || itemCat.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        item.style.display = "block";
        setTimeout(() => item.style.opacity = "1", 10);
      } else {
        item.style.opacity = "0";
        setTimeout(() => item.style.display = "none", 300);
      }
    });
  };

  filters.forEach(btn => {
    btn.addEventListener("click", () => {
      filters.forEach(f => f.classList.remove("active-filter"));
      btn.classList.add("active-filter");
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  // Lightbox Implementation
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImg = lightbox ? lightbox.querySelector(".lightbox-image") : null;
  const lightboxClose = lightbox ? lightbox.querySelector(".lightbox-close") : null;
  const lightboxPrev = lightbox ? lightbox.querySelector(".lightbox-prev") : null;
  const lightboxNext = lightbox ? lightbox.querySelector(".lightbox-next") : null;
  const lightboxCaption = lightbox ? lightbox.querySelector(".lightbox-caption") : null;

  if (!lightbox) return;

  let currentItems = [];
  let currentIndex = 0;

  const updateCurrentItemsList = () => {
    const activeFilter = document.querySelector(".gallery-filter-btn.active-filter");
    const activeCategory = activeFilter ? activeFilter.getAttribute("data-category") : "all";
    const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : "";

    currentItems = Array.from(grid.querySelectorAll(".gallery-item"))
      .filter(item => {
        const itemCat = item.getAttribute("data-category");
        const title = item.querySelector("h4").innerText.toLowerCase();
        const matchesCategory = activeCategory === "all" || itemCat === activeCategory;
        const matchesSearch = title.includes(searchQuery) || itemCat.includes(searchQuery);
        return matchesCategory && matchesSearch;
      })
      .map(item => ({
        src: item.querySelector("img") ? item.querySelector("img").src : "",
        title: item.querySelector("h4") ? item.querySelector("h4").innerText : "NS Furniture Portfolio",
        isPlaceholder: item.querySelector(".premium-image-placeholder") !== null
      }));
  };

  grid.addEventListener("click", (e) => {
    const clickedItem = e.target.closest(".gallery-item");
    if (!clickedItem) return;

    updateCurrentItemsList();

    const clickedImg = clickedItem.querySelector("img");
    let clickedSrc = clickedImg ? clickedImg.src : "";
    const isPlaceholder = clickedItem.querySelector(".premium-image-placeholder") !== null;

    if (isPlaceholder) {
      clickedSrc = "";
    }

    currentIndex = currentItems.findIndex(item => item.src === clickedSrc || (isPlaceholder && item.isPlaceholder));
    
    if (currentIndex !== -1) {
      openLightbox(currentItems[currentIndex]);
    }
  });

  const openLightbox = (item) => {
    if (item.isPlaceholder) {
      lightboxImg.style.display = "none";
      const tempPlaceholder = lightbox.querySelector(".lightbox-placeholder-fallback") || document.createElement("div");
      tempPlaceholder.className = "lightbox-placeholder-fallback";
      tempPlaceholder.innerHTML = `
        <div class="inner-ph">
          <i class="fas fa-couch"></i>
          <p>${item.title}</p>
          <span style="font-size:0.9rem;opacity:0.7">Customize Image URL in script.js to view details</span>
        </div>
      `;
      if (!lightbox.querySelector(".lightbox-placeholder-fallback")) {
        lightbox.querySelector(".lightbox-content").appendChild(tempPlaceholder);
      }
    } else {
      const ph = lightbox.querySelector(".lightbox-placeholder-fallback");
      if (ph) ph.remove();
      lightboxImg.style.display = "block";
      lightboxImg.src = item.src;
    }

    if (lightboxCaption) {
      lightboxCaption.innerText = item.title;
    }
    
    lightbox.classList.add("lightbox-active");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    lightbox.classList.remove("lightbox-active");
    document.body.style.overflow = "";
    const ph = lightbox.querySelector(".lightbox-placeholder-fallback");
    if (ph) ph.remove();
  };

  const showNext = () => {
    if (currentItems.length === 0) return;
    currentIndex = (currentIndex + 1) % currentItems.length;
    openLightbox(currentItems[currentIndex]);
  };

  const showPrev = () => {
    if (currentItems.length === 0) return;
    currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
    openLightbox(currentItems[currentIndex]);
  };

  if (lightboxClose && typeof lightboxClose.addEventListener === "function") {
    lightboxClose.addEventListener("click", closeLightbox);
  }
  if (lightboxNext && typeof lightboxNext.addEventListener === "function") {
    lightboxNext.addEventListener("click", showNext);
  }
  if (lightboxPrev && typeof lightboxPrev.addEventListener === "function") {
    lightboxPrev.addEventListener("click", showPrev);
  }
  
  if (lightbox && typeof lightbox.addEventListener === "function") {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target.classList.contains("lightbox-content")) {
        closeLightbox();
      }
    });
  }

  window.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("lightbox-active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });
}

/**
 * 10. Testimonials dot carousel slider track
 */
function initTestimonialsSlider() {
  const slider = document.querySelector(".testimonials-track");
  const dotsContainer = document.querySelector(".testimonials-dots");
  const cards = document.querySelectorAll(".testimonial-card");
  
  if (!slider || cards.length === 0) return;

  cards.forEach((card, index) => {
    const img = card.querySelector(".reviewer-img");
    if (img) {
      const url = images.testimonials[index];
      if (url && !url.startsWith("PASTE_")) {
        img.src = url;
      }
    }
  });

  let currentIndex = 0;
  const slideCount = cards.length;

  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement("button");
      dot.className = `testimonial-dot ${i === 0 ? "active-dot" : ""}`;
      dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
      dot.addEventListener("click", () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  const goToSlide = (index) => {
    currentIndex = index;
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
    
    const dots = dotsContainer.querySelectorAll(".testimonial-dot");
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.add("active-dot");
      } else {
        dot.classList.remove("active-dot");
      }
    });
  };

  let autoSlide = setInterval(() => {
    goToSlide((currentIndex + 1) % slideCount);
  }, 6000);

  slider.parentElement.addEventListener("mouseenter", () => clearInterval(autoSlide));
  slider.parentElement.addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => {
      goToSlide((currentIndex + 1) % slideCount);
    }, 6000);
  });
}

/**
 * 11. Client-Side Input Validations & EmailJS Integration
 */
function initEmailJSForm() {
  const form = document.querySelector(".enquiry-form");
  if (!form) return;

  const btnSubmit = form.querySelector(".btn-submit-form");
  const statusMsg = form.querySelector(".form-status-msg") || document.querySelector(".form-status-msg");

  // Initialize EmailJS
  if (typeof emailjs !== "undefined" && EMAILJS_CONFIG.publicKey && !EMAILJS_CONFIG.publicKey.startsWith("PASTE_")) {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (statusMsg) {
      statusMsg.className = "form-status-msg";
      statusMsg.style.display = "none";
      statusMsg.innerText = "";
    }

    const nameVal = form.querySelector("#name") ? form.querySelector("#name").value.trim() : "";
    const phoneVal = form.querySelector("#phone") ? form.querySelector("#phone").value.trim() : "";
    const emailInput = form.querySelector("#email");
    const serviceVal = form.querySelector("#service") ? form.querySelector("#service").value : "";
    const messageVal = form.querySelector("#message") ? form.querySelector("#message").value.trim() : "";

    // Mandatory Field Validations
    if (!nameVal || !phoneVal || !serviceVal || !messageVal) {
      showFormStatus("Please fill in all required fields (*) before submitting.", "error");
      return;
    }

    if (phoneVal.length < 8) {
      showFormStatus("Please specify a valid contact number.", "error");
      return;
    }

    // Disable button to prevent duplicate submissions
    if (btnSubmit) {
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Sending...`;
    }

    // Set submitted time value
    const timeInput = document.getElementById("form-time");
    if (timeInput) {
      timeInput.value = new Date().toLocaleString("en-IN");
    }

    // If email is empty, set to N/A
    let originalEmailVal = "";
    if (emailInput) {
      originalEmailVal = emailInput.value;
      if (!originalEmailVal.trim()) {
        emailInput.value = "N/A";
      }
    }

    const hasRealCredentials =
      EMAILJS_CONFIG.publicKey && !EMAILJS_CONFIG.publicKey.startsWith("PASTE_") &&
      EMAILJS_CONFIG.serviceId && !EMAILJS_CONFIG.serviceId.startsWith("PASTE_") &&
      EMAILJS_CONFIG.templateId && !EMAILJS_CONFIG.templateId.startsWith("PASTE_");

    if (hasRealCredentials) {
      if (typeof emailjs === "undefined") {
        console.error("EmailJS SDK is not loaded.");
        showFormStatus("Unable to send your enquiry right now. Please try again or contact us directly.", "error");
        if (btnSubmit) {
          btnSubmit.disabled = false;
          btnSubmit.innerHTML = `Send Quote Request <i class="fas fa-paper-plane"></i>`;
        }
        if (emailInput) emailInput.value = originalEmailVal;
        return;
      }

      emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        form
      )
      .then(() => {
        showFormStatus("Your enquiry has been sent successfully. We'll get back to you soon.", "success");
        form.reset();
      })
      .catch((err) => {
        console.error("EmailJS Technical Error Details:", err);
        showFormStatus("Unable to send your enquiry right now. Please try again or contact us directly.", "error");
        if (emailInput) emailInput.value = originalEmailVal;
      })
      .finally(() => {
        if (btnSubmit) {
          btnSubmit.disabled = false;
          btnSubmit.innerHTML = `Send Quote Request <i class="fas fa-paper-plane"></i>`;
        }
      });
    } else {
      console.warn("EmailJS credentials are still placeholders. Simulating successful form submission.");
      setTimeout(() => {
        showFormStatus("Your enquiry has been sent successfully. We'll get back to you soon.", "success");
        form.reset();
        if (btnSubmit) {
          btnSubmit.disabled = false;
          btnSubmit.innerHTML = `Send Quote Request <i class="fas fa-paper-plane"></i>`;
        }
      }, 1500);
    }
  });

  function showFormStatus(msg, type) {
    if (!statusMsg) return;
    statusMsg.style.display = "block";
    statusMsg.innerText = msg;
    statusMsg.className = "form-status-msg " + (type === "success" ? "status-success" : "status-error");
  }
}

/**
 * 12. Dynamic Back to Top Button
 */
function initBackToTopButton() {
  const btn = document.querySelector(".btn-back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.add("visible-btn");
    } else {
      btn.classList.remove("visible-btn");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/**
 * 13. Magnetic button interactive feedback
 */
function initMagneticCTAButtons() {
  const buttons = document.querySelectorAll(".magnetic-btn");
  
  buttons.forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate3d(${x * 0.35}px, ${y * 0.35}px, 0)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate3d(0, 0, 0)";
    });
  });
}
