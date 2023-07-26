import { c as create_ssr_component, e as escape, d as add_attribute, l as listen, f as bubble, p as prevent_default, h as stop_propagation, g as getContext, i as compute_rest_props, j as get_current_component, k as spread, o as escape_object, q as is_void, v as validate_component, m as missing_component, b as subscribe, s as setContext, r as set_store_value, t as each, u as createEventDispatcher, w as onDestroy } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
import { createStitches, defaultThemeMap } from "@stitches/core";
import "classnames";
const navbar_svelte_svelte_type_style_lang = "";
const css$a = {
  code: ".navbar.svelte-wp9iam{background:rgba(221, 86, 94, 1);border-radius:0px;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1);backdrop-filter:blur(9.9px);-webkit-backdrop-filter:blur(9.9px);border:1px solid rgba(245, 62, 106, 0.35)}.outerBar.svelte-wp9iam{width:100%;position:fixed;z-index:10}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$a);
  return `

  

  <div class="${"outerBar svelte-wp9iam"}"><div class="${"navbar svelte-wp9iam"}">
      <nav class="${"container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"}"><div class="${"flex items-center justify-between"}"><a class="${"md:text-xl font-bold text-rose-50 text-2xl hover:text-rose-200"}" href="${"/home"}">Riya Jain
          </a>
          
          
          <div class="${"md:hidden flex"}"><button type="${"button"}" class="${"text-rose-50 hover:text-rose-200 focus:outline-none focus:text-rose-50"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}"></path></svg></button></div></div>

        
        <div class="${"flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 " + escape("hidden", true)}"><a class="${"text-lg font-light text-rose-50 hover:text-rose-200 "}" href="${"#homepage"}">Home</a>
          <a class="${"text-lg font-light text-rose-50 hover:text-rose-200"}" href="${"#about"}">About</a>
          <a class="${"text-lg font-light text-rose-50 hover:text-rose-200"}" href="${"#experience"}">Experience</a>
          <a class="${"text-lg font-light text-rose-50 hover:text-rose-200"}" href="${"#projects"}">Projects</a></div></nav></div>
  </div>`;
});
const Picture = "/_app/immutable/assets/profile.45cc0153.png";
const homepage_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".pfp.svelte-1kgd3dr{height:100vh;width:100%;-o-object-fit:cover;object-fit:cover;border-radius:50% 0 0 50%;transform:translate3d(5%, -3%, -3%)}@media only screen and (min-device-width: 1024px){.pfp.svelte-1kgd3dr{border-left:15px solid #ffe4e6;border-top:0px solid #ffe4e6;border-right:0px solid #ffe4e6;border-bottom:0px solid #ffe4e6}}",
  map: null
};
const Homepage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$9);
  return `<link rel="${"stylesheet"}" href="${"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}">

<div class="${"flex flex-row items-center w-full h-full"}"><div class="${"basis-1/12 h-screen lg:h-full"}"></div>
    <div class="${"lg:basis-5/12 h-full basis-11/12"}"><p class="${"text-rose-100 text-7xl subpixel-antialiased font-bold tracking-wide"}">Riya Jain</p>
        <br>
        <p class="${"pt-3 text-rose-100 text-4xl subpixel-antialiased font-light tracking-wide"}">Computer scientist at UIUC</p>
        <br>
        <div class="${"flex flex-row"}"><button type="${"button"}" onclick="${"window.location.href='https://github.com/riyaj5246';"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-700 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"}"><svg aria-hidden="${"true"}" class="${"w-6 h-6"}" fill="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}" clip-rule="${"evenodd"}"></path></svg>
                <span class="${"sr-only"}">Github</span></button>
            <button type="${"button"}" onclick="${"window.location.href='https://www.linkedin.com/in/riya-jain-uofi/';"}" class="${"text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-700 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"}"><svg aria-hidden="${"true"}" class="${"w-6 h-6"}" fill="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"}" clip-rule="${"evenodd"}"></path></svg>
                <span class="${"sr-only"}">Linkedin</span></button>
            <button type="${"button"}" onclick="${"window.location.href='mailto:riyajj2@illinois.edu';"}" class="${"text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-700 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"}"><svg aria-hidden="${"true"}" class="${"w-6 h-6"}" fill="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"}" clip-rule="${"evenodd"}"></path></svg>
                <span class="${"sr-only"}">Email</span></button></div></div>
    <div class="${"lg:basis-6/12 h-full basis-0"}">
        <img class="${"pfp svelte-1kgd3dr"}"${add_attribute("src", Picture, 0)}></div>
</div>`;
});
const about_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: '.about.svelte-1g5ms9o{background-image:url("../assets/abt_bg.png");font-size:large;height:100vh}.glass_overlay.svelte-1g5ms9o{background:#31979560;backdrop-filter:blur(8.6px);-webkit-backdrop-filter:blur(8.6px);display:flex;justify-content:center;align-items:center;height:100vh}.box.svelte-1g5ms9o{background:rgba(64, 64, 64, 0.7);border-radius:16px;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1);backdrop-filter:blur(8.6px);-webkit-backdrop-filter:blur(8.6px);border:1px solid rgba(64, 64, 64, 0.63);justify-content:center;width:90%;height:auto}',
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<div class="${"about svelte-1g5ms9o"}"><div class="${"glass_overlay svelte-1g5ms9o"}"><div class="${"box svelte-1g5ms9o"}"><p class="${"py-7 text-rose-100 text-center text-4xl md:text-6xl subpixel-antialiased font-bold tracking-wide"}">Hey, I&#39;m Riya!</p>
            <p class="${"md:leading-relaxed py-5 px-10 md:px-20 text-rose-100 font-light text-center text-xl md:text-3xl antialiased tracking-wide "}">I&#39;m Riya Jain, a driven software engineer pursuing a <span class="${"text-rose-400 font-semibold"}">B.S. in Computer Science</span> with a minor in <span class="${"text-rose-400 font-semibold"}">Statistics</span> at the <span class="${"text-rose-500 font-semibold"}">University of Illinois, Urbana-Champaign</span>.
               I&#39;m highly passionate about harnessing the power of data to drive innovation and using machine learning to advance interdisciplinary developments. 
            </p>

            <p class="${"md:leading-relaxed py-5 px-10 md:px-20 text-rose-100 font-light text-center text-xl md:text-3xl antialiased tracking-wide "}">On campus, I&#39;m a software developer at the <span class="${"text-rose-500 font-semibold hover:text-teal-400"}"><a href="${"https://www.uiucdisruptionlab.org/"}" target="${"_blank"}" rel="${"noreferrer"}">Disruption Lab</a></span>, a research assistant at the <span class="${"text-rose-400 hover:text-teal-400 font-semibold"}"><a href="${"https://spin.ncsa.illinois.edu/"}" target="${"_blank"}" rel="${"noreferrer"}">National Center for Supercomputing Applications</a></span>, and a <span class="${"text-rose-500 hover:text-teal-400 font-semibold"}"><a href="${"http://wcs.illinois.edu/"}" target="${"_blank"}" rel="${"noreferrer"}">Women in Computer Science</a></span> board member.
            </p>
        <div></div></div></div>
</div>`;
});
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { observable = false } = $$props;
  let { component } = $$props;
  let { code } = $$props;
  if ($$props.observable === void 0 && $$bindings.observable && observable !== void 0)
    $$bindings.observable(observable);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  return `${observable ? `<!-- HTML_TAG_START -->${exception(component, code)}<!-- HTML_TAG_END -->` : ``}`;
});
const Error$2 = Error$1;
const isBrowser = () => typeof window !== "undefined";
const browser = isBrowser();
const minifiedCss = ".modal-header{padding: 2px 16px;background-color: #339af0;color: white;}.modal-body{padding: 2px 16px;}.modal-footer{padding: 2px 16px;background-color: #339af0;color: white;}.modal-content{position: relative;background-color: #fefefe;margin: auto;padding: 0;border: 1px solid #888;width: 80%;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);animation-name: animateTop;animation-duration: 0.4s;}@keyframes animateTop {from {top: -300px; opacity: 0}to {top: 0; opacity: 1}}";
const style = browser ? document.createElement("style") : void 0;
if (browser) {
  const s = style;
  s.textContent = minifiedCss;
  s.id = "svelteui-inject";
}
function UserException(component, message, solution) {
  if (browser)
    document.head.appendChild(style);
  const html = `
    <div class="modal-content">
        <div class="modal-header">
            <h2>[${component} Component Error]:</h2>
            <h3>${message}</h3>
        </div>
        <div class="modal-body">
            <pre>
                ${solution ? solution : ""}
            </pre>
        </div>
        <div class="modal-footer">
            <h3>Fix the code to dismiss this error.</h3>
        </div>
    </div>        
    `;
  return html;
}
function exception(component, code) {
  const { message, solution } = code;
  if (solution) {
    return UserException(component, message, solution);
  }
  return UserException(component, message);
}
function useActions(node, actions) {
  const actionReturns = [];
  if (actions) {
    for (let i = 0; i < actions.length; i++) {
      const actionEntry = actions[i];
      const action = Array.isArray(actionEntry) ? actionEntry[0] : actionEntry;
      if (Array.isArray(actionEntry) && actionEntry.length > 1) {
        actionReturns.push(action(node, actionEntry[1]));
      } else {
        actionReturns.push(action(node));
      }
    }
  }
  return {
    update(actions2) {
      if ((actions2 && actions2.length || 0) != actionReturns.length) {
        throw new Error("You must not change the length of an actions array.");
      }
      if (actions2) {
        for (let i = 0; i < actions2.length; i++) {
          const returnEntry = actionReturns[i];
          if (returnEntry && returnEntry.update) {
            const actionEntry = actions2[i];
            if (Array.isArray(actionEntry) && actionEntry.length > 1) {
              returnEntry.update(actionEntry[1]);
            } else {
              returnEntry.update();
            }
          }
        }
      }
    },
    destroy() {
      for (let i = 0; i < actionReturns.length; i++) {
        const returnEntry = actionReturns[i];
        if (returnEntry && returnEntry.destroy) {
          returnEntry.destroy();
        }
      }
    }
  };
}
const MODIFIER_DIVIDER = "!";
const modifierRegex = new RegExp(`^[^${MODIFIER_DIVIDER}]+(?:${MODIFIER_DIVIDER}(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$`);
function createEventForwarder(component, except = []) {
  let $on;
  const events = [];
  component.$on = (fullEventType, callback) => {
    const eventType = fullEventType;
    let destructor = () => {
    };
    for (const exception2 of except) {
      if (typeof exception2 === "string" && exception2 === eventType) {
        const callbacks = component.$$.callbacks[eventType] || (component.$$.callbacks[eventType] = []);
        callbacks.push(callback);
        return () => {
          const index = callbacks.indexOf(callback);
          if (index !== -1)
            callbacks.splice(index, 1);
        };
      }
      if (typeof exception2 === "object" && exception2["name"] === eventType) {
        const oldCallback = callback;
        callback = (...props) => {
          if (!(typeof exception2 === "object" && exception2["shouldExclude"]())) {
            oldCallback(...props);
          }
        };
      }
    }
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events.push([eventType, callback]);
    }
    return () => {
      destructor();
    };
  };
  function forward(e) {
    bubble(component, e);
  }
  return (node) => {
    const destructors = [];
    const forwardDestructors = {};
    $on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let handler = callback;
      let options = false;
      const modifierMatch = eventType.match(modifierRegex);
      if (modifierMatch) {
        const parts = eventType.split(MODIFIER_DIVIDER);
        eventType = parts[0];
        const eventOptions = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
        if (eventOptions.passive) {
          options = options || {};
          options.passive = true;
        }
        if (eventOptions.nonpassive) {
          options = options || {};
          options.passive = false;
        }
        if (eventOptions.capture) {
          options = options || {};
          options.capture = true;
        }
        if (eventOptions.once) {
          options = options || {};
          options.once = true;
        }
        if (eventOptions.preventDefault) {
          handler = prevent_default(handler);
        }
        if (eventOptions.stopPropagation) {
          handler = stop_propagation(handler);
        }
      }
      const off = listen(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };
      destructors.push(destructor);
      if (!(eventType in forwardDestructors)) {
        forwardDestructors[eventType] = listen(node, eventType, forward);
      }
      return destructor;
    };
    for (let i = 0; i < events.length; i++) {
      $on(events[i][0], events[i][1]);
    }
    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
        for (const entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      }
    };
  };
}
const key = {};
function useSvelteUIThemeContext() {
  return getContext(key);
}
const colorScheme = writable("light");
function useSvelteUITheme() {
  let observer;
  colorScheme?.subscribe((mode) => {
    observer = mode;
  });
  const DEFAULT_THEME = {
    // @ts-ignore
    ...theme,
    colorNames: colorNameMap,
    colorScheme: observer,
    dark: dark?.selector,
    fn: {
      themeColor: fns.themeColor,
      size: fns.size,
      radius: fns.radius,
      rgba: fns.rgba,
      variant: fns.variant
    }
  };
  return DEFAULT_THEME;
}
function themeColor(color, shade = 0) {
  const theme2 = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
  let _shade = "50";
  if (!isSvelteUIColor(color))
    return color;
  if (shade !== Number(0))
    _shade = `${shade.toString()}00`;
  return theme2.colors[`${color}${_shade}`]?.value;
}
function isSvelteUIColor(color) {
  let valid = false;
  switch (color) {
    case "dark":
      valid = true;
      break;
    case "gray":
      valid = true;
      break;
    case "red":
      valid = true;
      break;
    case "pink":
      valid = true;
      break;
    case "grape":
      valid = true;
      break;
    case "violet":
      valid = true;
      break;
    case "indigo":
      valid = true;
      break;
    case "blue":
      valid = true;
      break;
    case "cyan":
      valid = true;
      break;
    case "teal":
      valid = true;
      break;
    case "green":
      valid = true;
      break;
    case "lime":
      valid = true;
      break;
    case "yellow":
      valid = true;
      break;
    case "orange":
      valid = true;
      break;
    default:
      valid = false;
      break;
  }
  return valid;
}
function size(props) {
  if (typeof props.size === "number") {
    return props.size;
  }
  if (typeof props.sizes[props.size] === "number") {
    return props.sizes[props.size];
  }
  return +props.sizes[props.size]?.value || +props.sizes.md?.value;
}
function radius(radii) {
  const theme2 = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
  if (typeof radii === "number") {
    return radii;
  }
  return theme2.radii[radii].value;
}
function isHexColor(hex) {
  const replaced = hex.replace("#", "");
  return typeof replaced === "string" && replaced.length === 6 && !Number.isNaN(Number(`0x${replaced}`));
}
function hexToRgba(color) {
  const replaced = color.replace("#", "");
  const parsed = parseInt(replaced, 16);
  const r = parsed >> 16 & 255;
  const g = parsed >> 8 & 255;
  const b = parsed & 255;
  return {
    r,
    g,
    b,
    a: 1
  };
}
function rgbStringToRgba(color) {
  const [r, g, b, a] = color.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r, g, b, a: a || 1 };
}
function toRgba(color) {
  if (isHexColor(color)) {
    return hexToRgba(color);
  }
  if (color.startsWith("rgb")) {
    return rgbStringToRgba(color);
  }
  return {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
const vFunc = (color, gradient) => {
  const { themeColor: themeColor2, rgba: rgba2 } = fns;
  const variants = {
    /** Filled variant */
    filled: {
      darkMode: {
        backgroundColor: themeColor2(color, 8)
      },
      border: "transparent",
      backgroundColor: themeColor2(color, 6),
      color: "White",
      "&:hover": { backgroundColor: themeColor2(color, 7) }
    },
    /** Light variant */
    light: {
      darkMode: {
        backgroundColor: rgba2(themeColor2(color, 8), 0.35),
        color: color === "dark" ? themeColor2("dark", 0) : themeColor2(color, 2),
        "&:hover": { backgroundColor: rgba2(themeColor2(color, 7), 0.45) }
      },
      border: "transparent",
      backgroundColor: themeColor2(color, 0),
      color: color === "dark" ? themeColor2("dark", 9) : themeColor2(color, 6),
      "&:hover": { backgroundColor: themeColor2(color, 1) }
    },
    /** Outline variant */
    outline: {
      darkMode: {
        border: `1px solid ${themeColor2(color, 4)}`,
        color: `${themeColor2(color, 4)}`,
        "&:hover": { backgroundColor: rgba2(themeColor2(color, 4), 0.05) }
      },
      border: `1px solid ${themeColor2(color, 7)}`,
      backgroundColor: "transparent",
      color: themeColor2(color, 7),
      "&:hover": {
        backgroundColor: rgba2(themeColor2(color, 0), 0.35)
      }
    },
    /** Subtle variant */
    subtle: {
      darkMode: {
        color: color === "dark" ? themeColor2("dark", 0) : themeColor2(color, 2),
        "&:hover": { backgroundColor: rgba2(themeColor2(color, 8), 0.35) }
      },
      border: "transparent",
      backgroundColor: "transparent",
      color: color === "dark" ? themeColor2("dark", 9) : themeColor2(color, 6),
      "&:hover": {
        backgroundColor: themeColor2(color, 0)
      }
    },
    /** Default variant */
    default: {
      darkMode: {
        border: `1px solid ${themeColor2("dark", 5)}`,
        backgroundColor: themeColor2("dark", 5),
        color: "White",
        "&:hover": { backgroundColor: themeColor2("dark", 4) }
      },
      border: `1px solid ${themeColor2("gray", 4)}`,
      backgroundColor: "White",
      color: "Black",
      "&:hover": { backgroundColor: themeColor2("gray", 0) }
    },
    /** White variant */
    white: {
      border: "transparent",
      backgroundColor: "White",
      color: themeColor2(color, 7),
      "&:hover": { backgroundColor: "White" }
    },
    gradient: {}
  };
  if (gradient) {
    variants.gradient = {
      border: "transparent",
      background: `linear-gradient(${gradient.deg}deg, $${gradient.from}600 0%, $${gradient.to}600 100%)`,
      color: "White"
    };
  }
  return variants;
};
function rgba(color, alpha = 1) {
  if (typeof color !== "string" || alpha > 1 || alpha < 0) {
    return "rgba(0, 0, 0, 1)";
  }
  const { r, g, b } = toRgba(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
const DEFAULT_GRADIENT = {
  from: "indigo",
  to: "cyan",
  deg: 45
};
function variant({ variant: variant2, color, gradient }) {
  const theme2 = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
  const primaryShade = 6;
  if (variant2 === "light") {
    return {
      border: "transparent",
      background: [rgba(themeColor(color, 8), 0.35), rgba(themeColor(color, 0), 1)],
      color: [
        color === "dark" ? themeColor("dark", 0) : themeColor(color, 2),
        color === "dark" ? themeColor("dark", 9) : themeColor(color, primaryShade)
      ],
      // themeColor(color, theme.colorScheme === 'dark' ? 2 : getPrimaryShade('light')),
      hover: [rgba(themeColor(color, 7), 0.45), rgba(themeColor(color, 1), 0.65)]
    };
  }
  if (variant2 === "default") {
    return {
      border: [themeColor("dark", 5), themeColor("gray", 4)],
      background: [themeColor("dark", 5), theme2.colors.white.value],
      color: [theme2.colors.white.value, theme2.colors.black.value],
      hover: [themeColor("dark", 4), themeColor("gray", 0)]
    };
  }
  if (variant2 === "white") {
    return {
      border: "transparent",
      background: theme2.colors.white.value,
      color: themeColor(color, primaryShade),
      hover: null
    };
  }
  if (variant2 === "outline") {
    return {
      border: [themeColor(color, 4), themeColor(color, primaryShade)],
      background: "transparent",
      color: [themeColor(color, 4), themeColor(color, primaryShade)],
      hover: [rgba(themeColor(color, 4), 0.05), rgba(themeColor(color, 0), 0.35)]
    };
  }
  if (variant2 === "gradient") {
    const merged = {
      from: gradient?.from || DEFAULT_GRADIENT.from,
      to: gradient?.to || DEFAULT_GRADIENT.to,
      deg: gradient?.deg || DEFAULT_GRADIENT.deg
    };
    return {
      background: `linear-gradient(${merged.deg}deg, ${themeColor(merged.from, primaryShade)} 0%, ${themeColor(merged.to, primaryShade)} 100%)`,
      color: theme2.colors.white.value,
      border: "transparent",
      hover: null
    };
  }
  if (variant2 === "subtle") {
    return {
      border: "transparent",
      background: "transparent",
      color: [
        color === "dark" ? themeColor("dark", 0) : themeColor(color, 2),
        color === "dark" ? themeColor("dark", 9) : themeColor(color, primaryShade)
      ],
      hover: [rgba(themeColor(color, 8), 0.35), rgba(themeColor(color, 0), 1)]
    };
  }
  return {
    border: "transparent",
    background: [themeColor(color, 8), themeColor(color, primaryShade)],
    color: theme2.colors.white.value,
    hover: themeColor(color, 7)
  };
}
const fns = {
  size,
  radius,
  themeColor,
  variant,
  rgba
};
const colors = {
  primary: "#228be6",
  white: "#ffffff",
  black: "#000000",
  dark50: "#C1C2C5",
  dark100: "#A6A7AB",
  dark200: "#909296",
  dark300: "#5c5f66",
  dark400: "#373A40",
  dark500: "#2C2E33",
  dark600: "#25262b",
  dark700: "#1A1B1E",
  dark800: "#141517",
  dark900: "#101113",
  gray50: "#f8f9fa",
  gray100: "#f1f3f5",
  gray200: "#e9ecef",
  gray300: "#dee2e6",
  gray400: "#ced4da",
  gray500: "#adb5bd",
  gray600: "#868e96",
  gray700: "#495057",
  gray800: "#343a40",
  gray900: "#212529",
  red50: "#fff5f5",
  red100: "#ffe3e3",
  red200: "#ffc9c9",
  red300: "#ffa8a8",
  red400: "#ff8787",
  red500: "#ff6b6b",
  red600: "#fa5252",
  red700: "#f03e3e",
  red800: "#e03131",
  red900: "#c92a2a",
  pink50: "#fff0f6",
  pink100: "#ffdeeb",
  pink200: "#fcc2d7",
  pink300: "#faa2c1",
  pink400: "#f783ac",
  pink500: "#f06595",
  pink600: "#e64980",
  pink700: "#d6336c",
  pink800: "#c2255c",
  pink900: "#a61e4d",
  grape50: "#f8f0fc",
  grape100: "#f3d9fa",
  grape200: "#eebefa",
  grape300: "#e599f7",
  grape400: "#da77f2",
  grape500: "#cc5de8",
  grape600: "#be4bdb",
  grape700: "#ae3ec9",
  grape800: "#9c36b5",
  grape900: "#862e9c",
  violet50: "#f3f0ff",
  violet100: "#e5dbff",
  violet200: "#d0bfff",
  violet300: "#b197fc",
  violet400: "#9775fa",
  violet500: "#845ef7",
  violet600: "#7950f2",
  violet700: "#7048e8",
  violet800: "#6741d9",
  violet900: "#5f3dc4",
  indigo50: "#edf2ff",
  indigo100: "#dbe4ff",
  indigo200: "#bac8ff",
  indigo300: "#91a7ff",
  indigo400: "#748ffc",
  indigo500: "#5c7cfa",
  indigo600: "#4c6ef5",
  indigo700: "#4263eb",
  indigo800: "#3b5bdb",
  indigo900: "#364fc7",
  blue50: "#e7f5ff",
  blue100: "#d0ebff",
  blue200: "#a5d8ff",
  blue300: "#74c0fc",
  blue400: "#4dabf7",
  blue500: "#339af0",
  blue600: "#228be6",
  blue700: "#1c7ed6",
  blue800: "#1971c2",
  blue900: "#1864ab",
  cyan50: "#e3fafc",
  cyan100: "#c5f6fa",
  cyan200: "#99e9f2",
  cyan300: "#66d9e8",
  cyan400: "#3bc9db",
  cyan500: "#22b8cf",
  cyan600: "#15aabf",
  cyan700: "#1098ad",
  cyan800: "#0c8599",
  cyan900: "#0b7285",
  teal50: "#e6fcf5",
  teal100: "#c3fae8",
  teal200: "#96f2d7",
  teal300: "#63e6be",
  teal400: "#38d9a9",
  teal500: "#20c997",
  teal600: "#12b886",
  teal700: "#0ca678",
  teal800: "#099268",
  teal900: "#087f5b",
  green50: "#ebfbee",
  green100: "#d3f9d8",
  green200: "#b2f2bb",
  green300: "#8ce99a",
  green400: "#69db7c",
  green500: "#51cf66",
  green600: "#40c057",
  green700: "#37b24d",
  green800: "#2f9e44",
  green900: "#2b8a3e",
  lime50: "#f4fce3",
  lime100: "#e9fac8",
  lime200: "#d8f5a2",
  lime300: "#c0eb75",
  lime400: "#a9e34b",
  lime500: "#94d82d",
  lime600: "#82c91e",
  lime700: "#74b816",
  lime800: "#66a80f",
  lime900: "#5c940d",
  yellow50: "#fff9db",
  yellow100: "#fff3bf",
  yellow200: "#ffec99",
  yellow300: "#ffe066",
  yellow400: "#ffd43b",
  yellow500: "#fcc419",
  yellow600: "#fab005",
  yellow700: "#f59f00",
  yellow800: "#f08c00",
  yellow900: "#e67700",
  orange50: "#fff4e6",
  orange100: "#ffe8cc",
  orange200: "#ffd8a8",
  orange300: "#ffc078",
  orange400: "#ffa94d",
  orange500: "#ff922b",
  orange600: "#fd7e14",
  orange700: "#f76707",
  orange800: "#e8590c",
  orange900: "#d9480f"
};
const colorNameMap = {
  blue: "blue",
  cyan: "cyan",
  dark: "dark",
  grape: "grape",
  gray: "gray",
  green: "green",
  indigo: "indigo",
  lime: "lime",
  orange: "orange",
  pink: "pink",
  red: "red",
  teal: "teal",
  violet: "violet",
  yellow: "yellow"
};
const hasOwn = {}.hasOwnProperty;
function cx(...args) {
  const classes = [];
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (!arg)
      continue;
    const argType = typeof arg;
    if (argType === "string" || argType === "number") {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        const inner = { ...arg };
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (argType === "object") {
      if (arg.toString === Object.prototype.toString) {
        for (const key2 in arg) {
          if (hasOwn.call(arg, key2) && arg[key2]) {
            classes.push(key2);
          }
        }
      } else {
        classes.push(arg.toString());
      }
    }
  }
  return classes.join(" ");
}
function cssFactory() {
  return { cx };
}
function fromEntries(entries) {
  const o = {};
  Object.keys(entries).forEach((key2) => {
    const [k, v] = entries[key2];
    o[k] = v;
  });
  return o;
}
const CLASS_KEY = "svelteui";
function createRef(refName) {
  return `__svelteui-ref-${refName || ""}`;
}
function sanitizeCss(object, theme2) {
  const refs = [];
  const classMap = {};
  const _sanitize = (obj) => {
    Object.keys(obj).map((value) => {
      if (value === "variants")
        return;
      if (value === "ref") {
        refs.push(obj.ref);
      }
      if (value === "darkMode") {
        obj[`${theme2.dark} &`] = obj.darkMode;
      }
      if (obj[value] === null || typeof obj[value] !== "object")
        return;
      _sanitize(obj[value]);
      if (value === "darkMode") {
        delete obj[value];
      } else if (value.startsWith("@media"))
        ;
      else if (!value.startsWith("&") && !value.startsWith(theme2.dark)) {
        const getStyles = css$7(obj[value]);
        classMap[value] = getStyles().toString();
        obj[`& .${getStyles().toString()}`] = obj[value];
        delete obj[value];
      }
    });
  };
  _sanitize(object);
  delete object["& .root"];
  return { classMap, refs: Array.from(new Set(refs)) };
}
function createStyles(input) {
  const getCssObject = typeof input === "function" ? input : () => input;
  function useStyles2(params = {}, options) {
    const theme2 = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
    const { cx: cx2 } = cssFactory();
    const { override, name } = options || {};
    const dirtyCssObject = getCssObject(theme2, params, createRef);
    const sanitizedCss = Object.assign({}, dirtyCssObject);
    const { classMap, refs } = sanitizeCss(sanitizedCss, theme2);
    const root = dirtyCssObject["root"] ?? void 0;
    const cssObjectClean = root !== void 0 ? { ...root, ...sanitizedCss } : dirtyCssObject;
    const getStyles = css$7(cssObjectClean);
    const classes = fromEntries(Object.keys(dirtyCssObject).map((keys) => {
      const ref = refs.find((r) => r.includes(keys)) ?? "";
      const getRefName = ref?.split("-") ?? [];
      const keyIsRef = ref?.split("-")[getRefName?.length - 1] === keys;
      const value = keys.toString();
      let transformedClasses = classMap[value] ?? value;
      if (ref && keyIsRef) {
        transformedClasses = `${transformedClasses} ${ref}`;
      }
      if (keys === "root") {
        transformedClasses = getStyles({ css: override }).toString();
      }
      let libClass = `${CLASS_KEY}-${keys.toString()}`;
      if (name) {
        libClass = `${CLASS_KEY}-${name}-${keys.toString()}`;
        transformedClasses = `${transformedClasses} ${libClass}`;
      }
      return [keys, transformedClasses];
    }));
    return {
      cx: cx2,
      theme: theme2,
      classes,
      getStyles: css$7(cssObjectClean)
    };
  }
  return useStyles2;
}
const { css: css$7, globalCss, keyframes, getCssText, theme, createTheme, config, reset } = createStitches({
  prefix: "svelteui",
  theme: {
    colors,
    space: {
      0: "0rem",
      xs: 10,
      sm: 12,
      md: 16,
      lg: 20,
      xl: 24,
      xsPX: "10px",
      smPX: "12px",
      mdPX: "16px",
      lgPX: "20px",
      xlPX: "24px",
      1: "0.125rem",
      2: "0.25rem",
      3: "0.375rem",
      4: "0.5rem",
      5: "0.625rem",
      6: "0.75rem",
      7: "0.875rem",
      8: "1rem",
      9: "1.25rem",
      10: "1.5rem",
      11: "1.75rem",
      12: "2rem",
      13: "2.25rem",
      14: "2.5rem",
      15: "2.75rem",
      16: "3rem",
      17: "3.5rem",
      18: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem"
    },
    fontSizes: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px"
    },
    fonts: {
      standard: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
      fallback: "Segoe UI, system-ui, sans-serif"
    },
    fontWeights: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    },
    lineHeights: {
      xs: 1,
      sm: 1.25,
      md: 1.5,
      lg: 1.625,
      xl: 1.75
    },
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },
    sizes: {},
    radii: {
      xs: "2px",
      sm: "4px",
      md: "8px",
      lg: "16px",
      xl: "32px",
      squared: "33%",
      rounded: "50%",
      pill: "9999px"
    },
    shadows: {
      xs: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
      sm: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",
      md: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
      lg: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",
      xl: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"
    },
    zIndices: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      5: "500",
      10: "1000",
      max: "9999"
    },
    borderWidths: {
      light: "1px",
      normal: "2px",
      bold: "3px",
      extrabold: "4px",
      black: "5px",
      xs: "1px",
      sm: "2px",
      md: "3px",
      lg: "4px",
      xl: "5px"
    },
    breakpoints: {
      xs: 576,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1400
    },
    borderStyles: {},
    transitions: {}
  },
  media: {
    xs: "(min-width: 576px)",
    sm: "(min-width: 768px)",
    md: "(min-width: 992px)",
    lg: "(min-width: 1200px)",
    xl: "(min-width: 1400px)"
  },
  utils: {
    focusRing: (value) => ({
      WebkitTapHighlightColor: "transparent",
      "&:focus": {
        outlineOffset: 2,
        outline: value === "always" || value === "auto" ? "2px solid $primary" : "none"
      },
      "&:focus:not(:focus-visible)": {
        outline: value === "auto" || value === "never" ? "none" : void 0
      }
    }),
    /** padding top */
    p: (value) => ({
      padding: value
    }),
    pt: (value) => ({
      paddingTop: value
    }),
    pr: (value) => ({
      paddingRight: value
    }),
    pb: (value) => ({
      paddingBottom: value
    }),
    pl: (value) => ({
      paddingLeft: value
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    /** margin */
    m: (value) => ({
      margin: value
    }),
    /** margin-top */
    mt: (value) => ({
      marginTop: value
    }),
    mr: (value) => ({
      marginRight: value
    }),
    mb: (value) => ({
      marginBottom: value
    }),
    ml: (value) => ({
      marginLeft: value
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value
    }),
    ta: (value) => ({
      textAlign: value
    }),
    tt: (value) => ({
      textTransform: value
    }),
    to: (value) => ({
      textOverflow: value
    }),
    d: (value) => ({ display: value }),
    dflex: (value) => ({
      display: "flex",
      alignItems: value,
      justifyContent: value
    }),
    fd: (value) => ({
      flexDirection: value
    }),
    fw: (value) => ({ flexWrap: value }),
    ai: (value) => ({
      alignItems: value
    }),
    ac: (value) => ({
      alignContent: value
    }),
    jc: (value) => ({
      justifyContent: value
    }),
    as: (value) => ({
      alignSelf: value
    }),
    fg: (value) => ({ flexGrow: value }),
    fs: (value) => ({
      fontSize: value
    }),
    fb: (value) => ({
      flexBasis: value
    }),
    bc: (value) => ({
      backgroundColor: value
    }),
    bf: (value) => ({
      backdropFilter: value
    }),
    bg: (value) => ({
      background: value
    }),
    bgBlur: (value) => ({
      bf: "saturate(180%) blur(10px)",
      bg: value
    }),
    bgColor: (value) => ({
      backgroundColor: value
    }),
    backgroundClip: (value) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value
    }),
    bgClip: (value) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value
    }),
    br: (value) => ({
      borderRadius: value
    }),
    bw: (value) => ({
      borderWidth: value
    }),
    btrr: (value) => ({
      borderTopRightRadius: value
    }),
    bbrr: (value) => ({
      borderBottomRightRadius: value
    }),
    bblr: (value) => ({
      borderBottomLeftRadius: value
    }),
    btlr: (value) => ({
      borderTopLeftRadius: value
    }),
    bs: (value) => ({
      boxShadow: value
    }),
    normalShadow: (value) => ({
      boxShadow: `0 4px 14px 0 $${value}`
    }),
    lh: (value) => ({
      lineHeight: value
    }),
    ov: (value) => ({ overflow: value }),
    ox: (value) => ({
      overflowX: value
    }),
    oy: (value) => ({
      overflowY: value
    }),
    pe: (value) => ({
      pointerEvents: value
    }),
    events: (value) => ({
      pointerEvents: value
    }),
    us: (value) => ({
      WebkitUserSelect: value,
      userSelect: value
    }),
    userSelect: (value) => ({
      WebkitUserSelect: value,
      userSelect: value
    }),
    w: (value) => ({ width: value }),
    h: (value) => ({
      height: value
    }),
    minW: (value) => ({
      minWidth: value
    }),
    minH: (value) => ({
      minWidth: value
    }),
    mw: (value) => ({
      maxWidth: value
    }),
    maxW: (value) => ({
      maxWidth: value
    }),
    mh: (value) => ({
      maxHeight: value
    }),
    maxH: (value) => ({
      maxHeight: value
    }),
    size: (value) => ({
      width: value,
      height: value
    }),
    minSize: (value) => ({
      minWidth: value,
      minHeight: value,
      width: value,
      height: value
    }),
    sizeMin: (value) => ({
      minWidth: value,
      minHeight: value,
      width: value,
      height: value
    }),
    maxSize: (value) => ({
      maxWidth: value,
      maxHeight: value
    }),
    sizeMax: (value) => ({
      maxWidth: value,
      maxHeight: value
    }),
    appearance: (value) => ({
      WebkitAppearance: value,
      appearance: value
    }),
    scale: (value) => ({
      transform: `scale(${value})`
    }),
    linearGradient: (value) => ({
      backgroundImage: `linear-gradient(${value})`
    }),
    tdl: (value) => ({
      textDecorationLine: value
    }),
    // Text gradient effect
    textGradient: (value) => ({
      backgroundImage: `linear-gradient(${value})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    })
  },
  themeMap: {
    ...defaultThemeMap,
    width: "space",
    height: "space",
    minWidth: "space",
    maxWidth: "space",
    minHeight: "space",
    maxHeight: "space",
    flexBasis: "space",
    gridTemplateColumns: "space",
    gridTemplateRows: "space",
    blockSize: "space",
    minBlockSize: "space",
    maxBlockSize: "space",
    inlineSize: "space",
    minInlineSize: "space",
    maxInlineSize: "space",
    borderWidth: "borderWeights"
  }
});
const dark = createTheme("dark-theme", {
  colors,
  shadows: {
    xs: "-4px 0 15px rgb(0 0 0 / 50%)",
    sm: "0 5px 20px -5px rgba(20, 20, 20, 0.1)",
    md: "0 8px 30px rgba(20, 20, 20, 0.15)",
    lg: "0 30px 60px rgba(20, 20, 20, 0.15)",
    xl: "0 40px 80px rgba(20, 20, 20, 0.25)"
  }
});
globalCss({
  a: {
    focusRing: "auto"
  },
  body: {
    [`${dark.selector} &`]: {
      backgroundColor: "$dark700",
      color: "$dark50"
    },
    backgroundColor: "$white",
    color: "$black"
  }
});
globalCss({
  html: {
    fontFamily: "sans-serif",
    lineHeight: "1.15",
    textSizeAdjust: "100%",
    margin: 0
  },
  body: {
    margin: 0
  },
  "article, aside, footer, header, nav, section, figcaption, figure, main": {
    display: "block"
  },
  h1: {
    fontSize: "2em",
    margin: 0
  },
  hr: {
    boxSizing: "content-box",
    height: 0,
    overflow: "visible"
  },
  pre: {
    fontFamily: "monospace, monospace",
    fontSize: "1em"
  },
  a: {
    background: "transparent",
    textDecorationSkip: "objects"
  },
  "a:active, a:hover": {
    outlineWidth: 0
  },
  "abbr[title]": {
    borderBottom: "none",
    textDecoration: "underline"
  },
  "b, strong": {
    fontWeight: "bolder"
  },
  "code, kbp, samp": {
    fontFamily: "monospace, monospace",
    fontSize: "1em"
  },
  dfn: {
    fontStyle: "italic"
  },
  mark: {
    backgroundColor: "#ff0",
    color: "#000"
  },
  small: {
    fontSize: "80%"
  },
  "sub, sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline"
  },
  sup: {
    top: "-0.5em"
  },
  sub: {
    bottom: "-0.25em"
  },
  "audio, video": {
    display: "inline-block"
  },
  "audio:not([controls])": {
    display: "none",
    height: 0
  },
  img: {
    borderStyle: "none",
    verticalAlign: "middle"
  },
  "svg:not(:root)": {
    overflow: "hidden"
  },
  "button, input, optgroup, select, textarea": {
    fontFamily: "sans-serif",
    fontSize: "100%",
    lineHeight: "1.15",
    margin: 0
  },
  "button, input": {
    overflow: "visible"
  },
  "button, select": {
    textTransform: "none"
  },
  "button, [type=reset], [type=submit]": {
    WebkitAppearance: "button"
  },
  "button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner": {
    borderStyle: "none",
    padding: 0
  },
  "button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring": {
    outline: "1px dotted ButtonText"
  },
  legend: {
    boxSizing: "border-box",
    color: "inherit",
    display: "table",
    maxWidth: "100%",
    padding: 0,
    whiteSpace: "normal"
  },
  progress: {
    display: "inline-block",
    verticalAlign: "baseline"
  },
  textarea: {
    overflow: "auto"
  },
  "[type=checkbox], [type=radio]": {
    boxSizing: "border-box",
    padding: 0
  },
  "[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button": {
    height: "auto"
  },
  "[type=search]": {
    appearance: "textfield",
    outlineOffset: "-2px"
  },
  "[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration": {
    appearance: "none"
  },
  "::-webkit-file-upload-button": {
    appearance: "button",
    font: "inherit"
  },
  "details, menu": {
    display: "block"
  },
  summary: {
    display: "list-item"
  },
  canvas: {
    display: "inline-block"
  },
  template: {
    display: "none"
  },
  "[hidden]": {
    display: "none"
  }
});
const SYSTEM_PROPS = {
  mt: "marginTop",
  mb: "marginBottom",
  ml: "marginLeft",
  mr: "marginRight",
  pt: "paddingTop",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight"
};
const NEGATIVE_VALUES = ["-xs", "-sm", "-md", "-lg", "-xl"];
function isValidSizeValue(margin) {
  return typeof margin === "string" || typeof margin === "number";
}
function getSizeValue(margin, theme2) {
  if (NEGATIVE_VALUES.includes(margin)) {
    return theme2.fn.size({ size: margin.replace("-", ""), sizes: theme2.space }) * -1;
  }
  return theme2.fn.size({ size: margin, sizes: theme2.space });
}
function getSystemStyles(systemStyles, theme2) {
  const styles = {};
  if (isValidSizeValue(systemStyles.p)) {
    const value = getSizeValue(systemStyles.p, theme2);
    styles.padding = value;
  }
  if (isValidSizeValue(systemStyles.m)) {
    const value = getSizeValue(systemStyles.m, theme2);
    styles.margin = value;
  }
  if (isValidSizeValue(systemStyles.py)) {
    const value = getSizeValue(systemStyles.py, theme2);
    styles.paddingTop = value;
    styles.paddingBottom = value;
  }
  if (isValidSizeValue(systemStyles.px)) {
    const value = getSizeValue(systemStyles.px, theme2);
    styles.paddingLeft = value;
    styles.paddingRight = value;
  }
  if (isValidSizeValue(systemStyles.my)) {
    const value = getSizeValue(systemStyles.my, theme2);
    styles.marginTop = value;
    styles.marginBottom = value;
  }
  if (isValidSizeValue(systemStyles.mx)) {
    const value = getSizeValue(systemStyles.mx, theme2);
    styles.marginLeft = value;
    styles.marginRight = value;
  }
  Object.keys(SYSTEM_PROPS).forEach((property) => {
    if (isValidSizeValue(systemStyles[property])) {
      styles[SYSTEM_PROPS[property]] = theme2.fn.size({
        size: getSizeValue(systemStyles[property], theme2),
        sizes: theme2.space
      });
    }
  });
  return styles;
}
const Box = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let BoxStyles;
  let systemStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "css",
    "root",
    "m",
    "my",
    "mx",
    "mt",
    "mb",
    "ml",
    "mr",
    "p",
    "py",
    "px",
    "pt",
    "pb",
    "pl",
    "pr"
  ]);
  let { use = [], element = void 0, class: className = "", css: css2 = {}, root = void 0, m = void 0, my = void 0, mx = void 0, mt = void 0, mb = void 0, ml = void 0, mr = void 0, p = void 0, py = void 0, px = void 0, pt = void 0, pb = void 0, pl = void 0, pr = void 0 } = $$props;
  const forwardEvents = createEventForwarder(get_current_component());
  const castRoot = () => root;
  const theme2 = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
  const getCSSStyles = typeof css2 === "function" ? css2 : () => css2;
  let isHTMLElement;
  let isComponent;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.css === void 0 && $$bindings.css && css2 !== void 0)
    $$bindings.css(css2);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.m === void 0 && $$bindings.m && m !== void 0)
    $$bindings.m(m);
  if ($$props.my === void 0 && $$bindings.my && my !== void 0)
    $$bindings.my(my);
  if ($$props.mx === void 0 && $$bindings.mx && mx !== void 0)
    $$bindings.mx(mx);
  if ($$props.mt === void 0 && $$bindings.mt && mt !== void 0)
    $$bindings.mt(mt);
  if ($$props.mb === void 0 && $$bindings.mb && mb !== void 0)
    $$bindings.mb(mb);
  if ($$props.ml === void 0 && $$bindings.ml && ml !== void 0)
    $$bindings.ml(ml);
  if ($$props.mr === void 0 && $$bindings.mr && mr !== void 0)
    $$bindings.mr(mr);
  if ($$props.p === void 0 && $$bindings.p && p !== void 0)
    $$bindings.p(p);
  if ($$props.py === void 0 && $$bindings.py && py !== void 0)
    $$bindings.py(py);
  if ($$props.px === void 0 && $$bindings.px && px !== void 0)
    $$bindings.px(px);
  if ($$props.pt === void 0 && $$bindings.pt && pt !== void 0)
    $$bindings.pt(pt);
  if ($$props.pb === void 0 && $$bindings.pb && pb !== void 0)
    $$bindings.pb(pb);
  if ($$props.pl === void 0 && $$bindings.pl && pl !== void 0)
    $$bindings.pl(pl);
  if ($$props.pr === void 0 && $$bindings.pr && pr !== void 0)
    $$bindings.pr(pr);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        isHTMLElement = root && typeof root === "string";
        isComponent = root && typeof root === "function";
      }
    }
    BoxStyles = css$7({});
    systemStyles = getSystemStyles(
      {
        m,
        my,
        mx,
        mt,
        mb,
        ml,
        mr,
        p,
        py,
        px,
        pt,
        pb,
        pl,
        pr
      },
      theme2
    );
    $$rendered = `

${isHTMLElement ? `
	${((tag) => {
      return tag ? `<${castRoot()}${spread(
        [
          {
            class: escape(className, true) + " " + escape(
              BoxStyles({
                css: { ...getCSSStyles(theme2), ...systemStyles }
              }),
              true
            )
          },
          escape_object($$restProps)
        ],
        {}
      )}${add_attribute("this", element, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
    })(castRoot())}` : `${isComponent && typeof root !== "string" ? `${validate_component(root || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        { use: [forwardEvents, [useActions, use]] },
        {
          class: className + " " + BoxStyles({
            css: { ...getCSSStyles(theme2), ...systemStyles }
          })
        },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}` : `<div${spread(
      [
        {
          class: escape(className, true) + " " + escape(
            BoxStyles({
              css: { ...getCSSStyles(theme2), ...systemStyles }
            }),
            true
          )
        },
        escape_object($$restProps)
      ],
      {}
    )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</div>`}`}`;
  } while (!$$settled);
  return $$rendered;
});
const Box$1 = Box;
const useStyles$3 = createStyles((theme2, { iconSize }) => {
  return {
    root: {
      focusRing: "auto",
      position: "relative",
      appearance: "none",
      WebkitAppearance: "none",
      WebkitTapHighlightColor: "transparent",
      boxSizing: "border-box",
      height: `${theme2.fn.size({ size: iconSize, sizes: theme2.space })}px`,
      minHeight: `${theme2.fn.size({ size: iconSize, sizes: theme2.space })}px`,
      width: `${theme2.fn.size({ size: iconSize, sizes: theme2.space })}px`,
      minWidth: `${theme2.fn.size({ size: iconSize, sizes: theme2.space })}px`,
      padding: 0,
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      textDecoration: "none"
    },
    icon: {
      height: `${theme2.fn.size({ size: iconSize, sizes: theme2.space })}px`,
      minHeight: `${theme2.fn.size({ size: iconSize, sizes: theme2.space })}px`,
      position: "static",
      margin: 0,
      ml: 0,
      mr: 0,
      mt: 0,
      mb: 0
    }
  };
});
const IconRenderer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx2;
  let getStyles;
  let classes;
  let { className = "", override = {}, icon = void 0, iconSize = 16, iconProps = {} } = $$props;
  const requiresShim = typeof HTMLElement === "undefined" && typeof SVGElement === "undefined";
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
    $$bindings.iconSize(iconSize);
  if ($$props.iconProps === void 0 && $$bindings.iconProps && iconProps !== void 0)
    $$bindings.iconProps(iconProps);
  ({ cx: cx2, getStyles, classes } = useStyles$3({ iconSize }, { name: "IconRenderer" }));
  {
    if (!requiresShim && (icon instanceof HTMLElement || icon instanceof SVGElement)) {
      icon.classList.add(...classes.icon.split(" "));
    }
  }
  return `${typeof icon === "function" ? `${validate_component(icon || missing_component, "svelte:component").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cx2(className, classes.root, getStyles({ css: override }))
      },
      iconProps
    ),
    {},
    {}
  )}` : `${!requiresShim ? `${icon instanceof HTMLElement || icon instanceof SVGElement ? `<span${add_attribute("class", cx2(className, classes.root, getStyles({ css: override })), 0)}><!-- HTML_TAG_START -->${icon.outerHTML}<!-- HTML_TAG_END --></span>` : ``}` : ``}`}`;
});
const IconRenderer$1 = IconRenderer;
function getTextColor(theme2, color, variant2, gradient, dark2 = false) {
  if (color === "dimmed")
    return dark2 ? theme2.fn.themeColor("dark", 2) : theme2.fn.themeColor("gray", 6);
  if (variant2 === "gradient" || gradient)
    return theme2.fn.themeColor(color, 6);
  if (variant2 === "link")
    return dark2 ? theme2.fn.themeColor("blue", 4) : theme2.fn.themeColor("blue", 7);
  if (variant2 === "text")
    return dark2 ? theme2.fn.themeColor(color, 5) : theme2.fn.themeColor(color, 7);
}
const useStyles$2 = createStyles((theme2, { align, color, inherit, inline, lineClamp, size: size2, tracking, transform, underline, weight, gradient, variant: variant2 }) => {
  return {
    root: {
      focusRing: "auto",
      [`${theme2.dark} &`]: {
        color: color === "dark" ? "$dark50" : getTextColor(theme2, color, variant2, gradient, true)
      },
      fontFamily: inherit ? "inherit" : "$standard",
      fontSize: inherit ? "inherit" : typeof size2 === "string" ? `$${size2}` : `${size2}px`,
      fontWeight: inherit ? "inherit" : `$${weight}`,
      letterSpacing: theme2.letterSpacings[tracking]?.value,
      lineHeight: inherit ? "inherit" : inline ? 1 : typeof size2 === "string" ? `$${size2}` : `${size2}px`,
      textTransform: transform,
      textDecoration: underline ? "underline" : "none",
      textAlign: align,
      cursor: variant2 === "link" ? "pointer" : "inherit",
      color: color === "green" ? "Black" : getTextColor(theme2, color, variant2, gradient),
      backgroundImage: variant2 === "gradient" ? `linear-gradient(${gradient?.deg}deg, $${gradient?.from}600 0%, $${gradient?.to}600 100%)` : null,
      WebkitBackgroundClip: variant2 === "gradient" ? "text" : null,
      WebkitTextFillColor: variant2 === "gradient" ? "transparent" : null,
      ...lineClamp !== void 0 ? {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: lineClamp,
        WebkitBoxOrient: "vertical"
      } : {},
      "&:hover": variant2 === "link" && underline === true ? {
        textDecoration: "underline"
      } : void 0
    }
  };
});
const TextErrors = Object.freeze([
  {
    error: true,
    message: "If using the 'gradient' prop, set 'variant' prop to 'gradient' to apply the gradient",
    solution: `
                If your component looks like this:

                &lt;Text gradient={{from: 'blue', to: 'red', deg: 45}}&gt;Text string &lt;/Text&gt;
                                                                    ^^^ - Try adding prop variant='gradient'
                `
  },
  {
    error: true,
    message: "If using the 'link' variant, an href needs to be set and the root must be an anchor",
    solution: `
                If your component looks like this:

                &lt;Text variant='link'&gt;Text string &lt;/Text&gt;
                                    ^^^ - Try adding props href && root={'a'}'
                `
  }
]);
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx2;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "align",
    "color",
    "root",
    "transform",
    "variant",
    "size",
    "weight",
    "gradient",
    "inline",
    "lineClamp",
    "underline",
    "inherit",
    "href",
    "tracking"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, align = "left", color = "dark", root = void 0, transform = "none", variant: variant2 = "text", size: size2 = "md", weight = "normal", gradient = { from: "indigo", to: "cyan", deg: 45 }, inline = true, lineClamp = void 0, underline = false, inherit = false, href = "", tracking = "normal" } = $$props;
  const forwardEvents = createEventForwarder(get_current_component());
  let observable = false;
  let err;
  if (gradient.from === "indigo" && gradient.to === "cyan0" && gradient.deg === 45 && variant2 !== "gradient") {
    observable = true;
    err = TextErrors[0];
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.transform === void 0 && $$bindings.transform && transform !== void 0)
    $$bindings.transform(transform);
  if ($$props.variant === void 0 && $$bindings.variant && variant2 !== void 0)
    $$bindings.variant(variant2);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0)
    $$bindings.gradient(gradient);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.lineClamp === void 0 && $$bindings.lineClamp && lineClamp !== void 0)
    $$bindings.lineClamp(lineClamp);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0)
    $$bindings.underline(underline);
  if ($$props.inherit === void 0 && $$bindings.inherit && inherit !== void 0)
    $$bindings.inherit(inherit);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.tracking === void 0 && $$bindings.tracking && tracking !== void 0)
    $$bindings.tracking(tracking);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ cx: cx2, classes, getStyles } = useStyles$2(
      {
        lineClamp,
        underline,
        inline,
        inherit,
        gradient,
        variant: variant2,
        align,
        color,
        transform,
        size: size2,
        weight,
        tracking
      },
      { name: "Text" }
    ));
    $$rendered = `${validate_component(Error$2, "Error").$$render($$result, { observable, component: "Text", code: err }, {}, {})}



${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { root },
        { use: [forwardEvents, [useActions, use]] },
        {
          class: cx2(className, classes.root, getStyles({ css: override }))
        },
        { href: href ?? void 0 },
        $$restProps,
        { element }
      ),
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Text$1 = Text;
const useStyles$1 = createStyles((_, { align, bulletSize, lineWidth }) => {
  return {
    root: {
      paddingLeft: align === "left" ? bulletSize / 2 + lineWidth / 2 : 0,
      paddingRight: align === "left" ? 0 : bulletSize / 2 + lineWidth / 2
    }
  };
});
const ctx = "Timeline";
const Timeline$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx2;
  let classes;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "active",
    "align",
    "bulletSize",
    "radius",
    "color",
    "lineWidth",
    "reverseActive"
  ]);
  let $contextStore, $$unsubscribe_contextStore;
  let { use = [], element = void 0, class: className = "", override = {}, active = -1, align = "left", bulletSize = 20, radius: radius2 = "xl", color = "blue", lineWidth = 4, reverseActive = false } = $$props;
  const contextStore = writable({
    active,
    reverseActive,
    align,
    bulletSize,
    radius: radius2,
    color,
    lineWidth
  });
  $$unsubscribe_contextStore = subscribe(contextStore, (value) => $contextStore = value);
  setContext(ctx, contextStore);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.bulletSize === void 0 && $$bindings.bulletSize && bulletSize !== void 0)
    $$bindings.bulletSize(bulletSize);
  if ($$props.radius === void 0 && $$bindings.radius && radius2 !== void 0)
    $$bindings.radius(radius2);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.lineWidth === void 0 && $$bindings.lineWidth && lineWidth !== void 0)
    $$bindings.lineWidth(lineWidth);
  if ($$props.reverseActive === void 0 && $$bindings.reverseActive && reverseActive !== void 0)
    $$bindings.reverseActive(reverseActive);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    set_store_value(
      contextStore,
      $contextStore = {
        active,
        reverseActive,
        align,
        bulletSize,
        radius: radius2,
        color,
        lineWidth
      },
      $contextStore
    );
    ({ cx: cx2, classes } = useStyles$1({ align, bulletSize, lineWidth }, { override, name: "Timeline" }));
    $$rendered = `
${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign({}, { use }, { class: cx2(className, classes.root) }, $$restProps, { element }),
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_contextStore();
  return $$rendered;
});
const _Timeline = Timeline$1;
const useStyles = createStyles((theme2, { align, bulletSize, radius: radius2, color, lineVariant, lineWidth }, getRef) => {
  const colors2 = vFunc(color).filled;
  return {
    root: {
      position: "relative",
      boxSizing: "border-box",
      color: theme2.colors.black.value,
      paddingLeft: align === "left" ? theme2.space.xlPX.value : 0,
      paddingRight: align === "right" ? theme2.space.xlPX.value : 0,
      textAlign: align,
      darkMode: {
        color: theme2.fn.themeColor("dark", 0)
      },
      "&:not(:last-of-type)::before": {
        display: "block"
      },
      "&:not(:first-of-type)": {
        marginTop: theme2.space.xlPX.value
      },
      "&::before": {
        boxSizing: "border-box",
        position: "absolute",
        top: 0,
        bottom: `${-theme2.space.xl.value}px`,
        left: align === "left" ? -lineWidth : "auto",
        right: align === "right" ? -lineWidth : "auto",
        borderLeft: `${lineWidth}px ${lineVariant} ${theme2.fn.themeColor("gray", 3)}`,
        content: '""',
        display: "none",
        darkMode: {
          borderLeft: `${lineWidth}px ${lineVariant} ${theme2.fn.themeColor("dark", 4)}`
        }
      },
      "&.lineActive": {
        "&::before": {
          borderLeftColor: colors2.backgroundColor
        }
      },
      [`&.active .${getRef("bulletContainer")}`]: {
        borderColor: colors2.backgroundColor,
        backgroundColor: theme2.colors.white.value
      },
      [`&.active .${getRef("bulletContainerWithChild")}`]: {
        backgroundColor: colors2.backgroundColor,
        color: theme2.colors.white.value
      }
    },
    bulletContainer: {
      ref: getRef("bulletContainer"),
      boxSizing: "border-box",
      width: bulletSize,
      height: bulletSize,
      borderRadius: theme2.fn.radius(radius2),
      border: `${lineWidth}px solid ${theme2.fn.themeColor("gray", 3)}`,
      backgroundColor: theme2.colors.white.value,
      position: "absolute",
      top: 0,
      left: align === "left" ? -bulletSize / 2 - lineWidth / 2 : "auto",
      right: align === "right" ? -bulletSize / 2 - lineWidth / 2 : "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme2.colors.white.value,
      darkMode: {
        border: `${lineWidth}px solid ${theme2.fn.themeColor("dark", 4)}`,
        backgroundColor: theme2.fn.themeColor("dark", 7)
      }
    },
    bulletContainerWithChild: {
      ref: getRef("bulletContainerWithChild"),
      borderWidth: 1,
      backgroundColor: theme2.fn.themeColor("gray", 3),
      color: theme2.colors.black.value,
      darkMode: {
        backgroundColor: theme2.fn.themeColor("dark", 4),
        color: theme2.fn.themeColor("dark", 0)
      }
    },
    bullet: {},
    container: {},
    title: {
      fontWeight: 500,
      lineHeight: 1,
      marginBottom: `${+theme2.space.xs.value / 2}px`,
      textAlign: align
    },
    content: {
      textAlign: align
    }
  };
});
const TimelineItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _active;
  let _lineActive;
  let _align;
  let _color;
  let _radius;
  let _bulletSize;
  let _lineWidth;
  let cx2;
  let classes;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "active",
    "align",
    "bullet",
    "bulletSize",
    "radius",
    "color",
    "lineActive",
    "lineVariant",
    "lineWidth",
    "title"
  ]);
  let $state, $$unsubscribe_state;
  let { use = [], element = void 0, class: className = "", override = {}, active = void 0, align = void 0, bullet = void 0, bulletSize = void 0, radius: radius2 = void 0, color = void 0, lineActive = void 0, lineVariant = "solid", lineWidth = void 0, title = void 0 } = $$props;
  const state = getContext(ctx);
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  function calculateActive() {
    if (!element)
      return;
    const children = element.parentNode.children;
    const index = Array.prototype.indexOf.call(children, element);
    _active = active !== void 0 ? active : $state.reverseActive ? $state.active >= children.length - index - 1 : $state.active >= index;
    _lineActive = lineActive !== void 0 ? lineActive : $state.reverseActive ? $state.active >= children.length - index - 1 : $state.active - 1 >= index;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.bullet === void 0 && $$bindings.bullet && bullet !== void 0)
    $$bindings.bullet(bullet);
  if ($$props.bulletSize === void 0 && $$bindings.bulletSize && bulletSize !== void 0)
    $$bindings.bulletSize(bulletSize);
  if ($$props.radius === void 0 && $$bindings.radius && radius2 !== void 0)
    $$bindings.radius(radius2);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.lineActive === void 0 && $$bindings.lineActive && lineActive !== void 0)
    $$bindings.lineActive(lineActive);
  if ($$props.lineVariant === void 0 && $$bindings.lineVariant && lineVariant !== void 0)
    $$bindings.lineVariant(lineVariant);
  if ($$props.lineWidth === void 0 && $$bindings.lineWidth && lineWidth !== void 0)
    $$bindings.lineWidth(lineWidth);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    _active = active;
    _lineActive = lineActive;
    _align = align !== void 0 ? align : $state.align;
    _color = color !== void 0 ? color : $state.color;
    _radius = radius2 !== void 0 ? radius2 : $state.radius;
    _bulletSize = bulletSize !== void 0 ? bulletSize : $state.bulletSize;
    _lineWidth = lineWidth !== void 0 ? lineWidth : $state.lineWidth;
    {
      calculateActive();
    }
    ({ cx: cx2, classes } = useStyles(
      {
        align: _align,
        bulletSize: _bulletSize,
        radius: _radius,
        color: _color,
        lineVariant,
        lineWidth: _lineWidth
      },
      { override, name: "TimelineItem" }
    ));
    $$rendered = `${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { use },
        {
          class: cx2(className, classes.root, { lineActive: _lineActive, active: _active })
        },
        $$restProps,
        { element }
      ),
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div${add_attribute("class", cx2(classes.bulletContainer, bullet && classes.bulletContainerWithChild), 0)}>${slots.bullet ? slots.bullet({}) : `
			${bullet ? `${validate_component(IconRenderer$1, "IconRenderer").$$render(
            $$result,
            {
              icon: bullet,
              className: classes.bullet,
              iconSize: bulletSize,
              color
            },
            {},
            {}
          )}` : ``}
		`}</div>
	<div${add_attribute("class", classes.container, 0)}>${title ? `${validate_component(Text$1, "Text").$$render($$result, { class: classes.title }, {}, {
            default: () => {
              return `${escape(title)}`;
            }
          })}` : ``}
		<div${add_attribute("class", classes.content, 0)}>${slots.default ? slots.default({}) : ``}</div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_state();
  return $$rendered;
});
const TimelineItem$1 = TimelineItem;
_Timeline.Item = TimelineItem$1;
const Timeline = _Timeline;
const ECard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { position } = $$props;
  let { company } = $$props;
  let { bullets } = $$props;
  let { dates } = $$props;
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.company === void 0 && $$bindings.company && company !== void 0)
    $$bindings.company(company);
  if ($$props.bullets === void 0 && $$bindings.bullets && bullets !== void 0)
    $$bindings.bullets(bullets);
  if ($$props.dates === void 0 && $$bindings.dates && dates !== void 0)
    $$bindings.dates(dates);
  return `${validate_component(Timeline.Item, "Timeline.Item").$$render($$result, {}, {}, {
    default: () => {
      return `<p class="${"text-2xl font-bold tracking-wide text-rose-100"}">${escape(position)}
    </p><p></p><p class="${"text-l font-extrabold tracking-wide text-teal-400"}">${escape(company)}
    </p><p>${``}
    
    </p><p class="${"pt-1 text-s font-semibold tracking-wide text-rose-400"}">${escape(dates)}
    </p><p>${`<button class="${"font-bold tracking-wide text-rose-100 mt-1 bg-teal-400 rounded-lg px-2"}">Expand </button>`}
    ${``}</p>`;
    }
  })}`;
});
const experience_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".experience.svelte-12e8q8j{background-color:rgb(64, 64, 64);height:auto}",
  map: null
};
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let roles = [
    {
      position: "Software Engineering Intern",
      company: "SHEDD CAPITAL",
      bullets: [
        "Followed agile and test-driven development processes to deliver new features and aid in a full front-end app migration from Django templates to Vue.js and Django REST, implementing 25% of all page migrations.",
        "Used Extract, Transform, Load (ETL) principles to maintain and add to a PostgreSQL database of 100,000+ companies from a variety of sources.",
        "Optimized an internal webcrawler to scrape target company website body texts, leading to an increase of webcrawl efficacy from 60% to 80%, which resulted in a 130% improvement in the full-text search output."
      ],
      dates: "MAY 2023 - NOW"
    },
    {
      position: "Software Developer",
      company: "DISRUPTION LAB",
      bullets: [
        "Gies VR: Worked to develop an interactive Virtual Reality world using Unity, C#, Figma, and Git.",
        "AI Essay: Created a tool using React, AWS, Python, and the OpenAI API to automate essay grading."
      ],
      dates: "AUG. 2022 - NOW"
    },
    {
      position: "Research Assistant - SPIN Intern",
      company: "NATIONAL CENTER FOR SUPERCOMPUTING APPLICATIONS",
      bullets: [
        "Utilized Python and Jupyter Notebooks to package and publish machine-learning models to an open-source interface called DLHub.",
        "Contibuted to an increased level of accessibility to computational models created by scientific researchers in the fields of physics, astronomy, biology, chemistry, and more."
      ],
      dates: "DEC. 2022 - JUN. 2023"
    },
    {
      position: "SIG Discovery Day Participant",
      company: "SESQUEHANNA INTERNATIONAL GROUP, LLP",
      bullets: [
        "Attended a 2-day discovery day to network with students passionate about quantitative finance and employees at SIG.",
        "Learned about the quantitative finance industry and the role of SWEs and Quant Traders at SIG."
      ],
      dates: "APR. 2023"
    },
    {
      position: "Software Developer",
      company: "YOUNG JAINS OF AMERICA",
      bullets: [
        "Designed & developed components of YJA mobile app used by 750+ individuals from around the country with Figma, Javascript, and React Native."
      ],
      dates: "JUN. 2021 - AUG. 2021"
    },
    {
      position: "High School TARGET Program Intern",
      company: "FERMI NATIONAL ACCELERATOR LABORATORY",
      bullets: [
        "Collaborated with a team to analyze data from beam particle monitors within Fermilab's particle accelerators to fine-tune the success-rate of physics experiments, presenting findings to a board of scientists.",
        "Utilized Python libraries including Matplotlib, NumPy, and Pandas to efficiently clean, process, and visualize large tables of data.",
        "Attended physics lectures, virtual lab tours, networking and scientific panels, and professional development workshops."
      ],
      dates: "JUN. 2021 - AUG. 2021"
    },
    {
      position: "Computer Science Tutor",
      company: "CODE NINJAS",
      bullets: [
        "Collaborated with other high schoolers to teach 30+ K-8th graders basic programming concepts, 5+ revise curriculums, and plan/run 5+ STEM summer camps."
      ],
      dates: "FEB. 2021 - JUL. 2021"
    }
  ];
  $$result.css.add(css$6);
  return `


<div class="${"experience svelte-12e8q8j"}"><div class="${"sm:hidden inline"}"><p class="${"pt-10 px-5 text-rose-100 text-4xl subpixel-antialiased font-bold tracking-wide"}">My Professional Experience</p></div>

    <div class="${"flex flex-row items-center w-full h-full"}"><div class="${"hidden sm:inline basis-2/5 flex flex-col items-end w-full h-full"}"><div class="${"basis-3/4 my-20"}"><p class="${"pt-7 px-5 text-rose-100 text-right text-4xl md:text-6xl subpixel-antialiased font-bold tracking-wide"}">My Professional Experience
                </p></div>
            <div class="${"text-right basis-1/4"}"><button onclick="${"window.location.href='https://drive.google.com/file/d/1K3TjK-Oa2pAxvjKGmF7AwzJudYazy5OK/view?usp=sharing';"}" class="${"rounded-md bg-teal-500 hover:bg-teal-800 text-white font-bold py-5 px-5 my-20"}"><span class="${"text-l text-rose-100"}">Check out my resume! </span></button></div></div>

        <div class="${"basis-5/5 sm:basis-3/5 p-10"}">${validate_component(Timeline, "Timeline").$$render(
    $$result,
    {
      color: "#fb7185",
      active: roles.length,
      lineWidth: 8,
      bulletSize: 35
    },
    {},
    {
      default: () => {
        return `${each(roles, (role) => {
          return `${validate_component(ECard, "ECard").$$render(
            $$result,
            {
              position: role.position,
              company: role.company,
              bullets: role.bullets,
              dates: role.dates
            },
            {},
            {}
          )}`;
        })}`;
      }
    }
  )}</div></div>
    <div class="${"sm:hidden inline text-center"}"><button onclick="${"window.location.href='https://drive.google.com/file/d/1K3TjK-Oa2pAxvjKGmF7AwzJudYazy5OK/view?usp=sharing';"}" class="${"rounded-md bg-teal-500 hover:bg-teal-800 text-white font-bold py-5 px-5 mb-10 mx-20"}"><span class="${"text-l text-rose-100"}">Check out my resume! </span></button></div>
</div>`;
});
const Swipe_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".swipe-panel.svelte-1njm1eq.svelte-1njm1eq{position:relative;height:var(--sv-swipe-panel-height, 100%);width:var(--sv-swipe-panel-width, inherit)}.swipe-item-wrapper.svelte-1njm1eq.svelte-1njm1eq{overflow:hidden;position:relative;height:inherit;z-index:var(--sv-swipe-panel-wrapper-index, 2);pointer-events:none}.swipeable-total_elements.svelte-1njm1eq.svelte-1njm1eq,.swipeable-slot-wrapper.svelte-1njm1eq.svelte-1njm1eq{position:relative;width:inherit;height:inherit}.swipe-handler.svelte-1njm1eq.svelte-1njm1eq{width:100%;position:absolute;top:var(--sv-swipe-handler-top, 0px);bottom:0px;left:0;right:0;background:rgba(0, 0, 0, 0)}.swipe-indicator.svelte-1njm1eq.svelte-1njm1eq{position:relative;bottom:1.5rem;display:flex;justify-content:center;z-index:var(--sv-swipe-panel-wrapper-index, 2);pointer-events:none}.dot.svelte-1njm1eq.svelte-1njm1eq{height:10px;width:10px;background-color:transparent;border:1px solid grey;border-radius:50%;display:inline-block;margin:0px 2px;cursor:pointer;pointer-events:fill}.swipe-indicator.svelte-1njm1eq .is-active.svelte-1njm1eq{background-color:var(--sv-swipe-indicator-active-color, grey)}",
  map: null
};
const Swipe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { transitionDuration = 200 } = $$props;
  let { showIndicators = false } = $$props;
  let { autoplay = false } = $$props;
  let { delay = 1e3 } = $$props;
  let { defaultIndex = 0 } = $$props;
  let { active_item = 0 } = $$props;
  let { is_vertical = false } = $$props;
  let { allow_infinite_swipe = false } = $$props;
  let activeIndicator = 0, indicators, total_elements = 0, availableSpace = 0, availableMeasure = 0, swipeElements, availableDistance = 0, swipeWrapper, pos_axis = 0, page_axis = is_vertical ? "pageY" : "pageX", axis, last_axis_pos;
  let played;
  let run_interval = false;
  let fire = createEventDispatcher();
  function update() {
    let { offsetWidth, offsetHeight } = swipeWrapper.querySelector(".swipeable-total_elements");
    availableSpace = is_vertical ? offsetHeight : offsetWidth;
    setElementsPosition({
      init: true,
      elems: [...swipeElements],
      availableSpace,
      has_infinite_loop: allow_infinite_swipe
    });
    availableDistance = 0;
    availableMeasure = availableSpace * (total_elements - 1);
    if (defaultIndex) {
      changeItem(defaultIndex);
    }
  }
  function setElementsPosition({ elems = [], availableSpace: availableSpace2 = 0, pos_axis: pos_axis2 = 0, has_infinite_loop = false, distance = 0, moving = false, init = false, end = false, reset: reset2 = false }) {
    elems.forEach((element, i) => {
      let idx = has_infinite_loop ? i - 1 : i;
      if (init) {
        element.style.transform = generateTranslateValue(availableSpace2 * idx);
      }
      if (moving) {
        element.style.cssText = generateTouchPosCss(availableSpace2 * idx - distance);
      }
      if (end) {
        element.style.cssText = generateTouchPosCss(availableSpace2 * idx - pos_axis2, true);
      }
      if (reset2) {
        element.style.cssText = generateTouchPosCss(availableSpace2 * idx - pos_axis2);
      }
    });
  }
  function eventDelegate(type) {
    let delegationTypes = {
      add: "addEventListener",
      remove: "removeEventListener"
    };
    if (typeof window !== "undefined") {
      window[delegationTypes[type]]("mousemove", onMove);
      window[delegationTypes[type]]("mouseup", onEnd);
      window[delegationTypes[type]]("touchmove", onMove, { passive: false });
      window[delegationTypes[type]]("touchend", onEnd, { passive: false });
    }
  }
  function generateTranslateValue(value) {
    return is_vertical ? `translate3d(0, ${value}px, 0)` : `translate3d(${value}px, 0, 0)`;
  }
  function generateTouchPosCss(value, touch_end = false) {
    let transformString = generateTranslateValue(value);
    let _css = `
-webkit-transition-duration: ${touch_end ? transitionDuration : "0"}ms;
transition-duration: ${touch_end ? transitionDuration : "0"}ms;
-webkit-transform: ${transformString};
-ms-transform: ${transformString};`;
    return _css;
  }
  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", update);
    }
  });
  let touch_active = false;
  function onMove(e) {
    if (touch_active) {
      e.stopImmediatePropagation();
      e.stopPropagation();
      let _axis = e.touches ? e.touches[0][page_axis] : e[page_axis], distance = axis - _axis + pos_axis;
      if (!allow_infinite_swipe) {
        if (pos_axis == 0 && axis < _axis || pos_axis == availableMeasure && axis > _axis) {
          return;
        }
      }
      e.preventDefault();
      setElementsPosition({
        moving: true,
        elems: [...swipeElements],
        availableSpace,
        distance,
        has_infinite_loop: allow_infinite_swipe
      });
      availableDistance = distance;
      last_axis_pos = _axis;
    }
  }
  function onEnd(e) {
    if (e && e.cancelable) {
      e.preventDefault();
    }
    e && e.stopImmediatePropagation();
    e && e.stopPropagation();
    let direction = axis < last_axis_pos;
    touch_active = false;
    let _as = availableSpace;
    let accidental_touch = Math.round(availableSpace / 50) > Math.abs(axis - last_axis_pos);
    if (accidental_touch) {
      availableDistance = Math.round(availableDistance / _as) * _as;
    } else {
      availableDistance = direction ? Math.floor(availableDistance / _as) * _as : Math.ceil(availableDistance / _as) * _as;
    }
    axis = null;
    last_axis_pos = null;
    pos_axis = availableDistance;
    activeIndicator = availableDistance / _as;
    active_item = activeIndicator;
    defaultIndex = active_item;
    setElementsPosition({
      end: true,
      elems: [...swipeElements],
      availableSpace: _as,
      pos_axis,
      has_infinite_loop: allow_infinite_swipe
    });
    if (allow_infinite_swipe) {
      if (active_item === -1) {
        pos_axis = _as * (total_elements - 1);
      }
      if (active_item === total_elements) {
        pos_axis = 0;
      }
      activeIndicator = pos_axis / _as;
      active_item = activeIndicator;
      defaultIndex = active_item;
      setTimeout(
        () => {
          setElementsPosition({
            reset: true,
            elems: [...swipeElements],
            availableSpace: _as,
            pos_axis,
            has_infinite_loop: allow_infinite_swipe
          });
        },
        transitionDuration
      );
    }
    eventDelegate("remove");
    let swipe_direction = direction ? "right" : "left";
    fire("change", {
      active_item,
      swipe_direction,
      active_element: swipeElements[active_item]
    });
  }
  function changeItem(item) {
    let max = availableSpace;
    availableDistance = max * item;
    activeIndicator = item;
    onEnd();
  }
  function changeView() {
    changeItem(played);
    played = played < total_elements - 1 + allow_infinite_swipe ? ++played : 0;
  }
  function goTo(step) {
    let item = allow_infinite_swipe ? step : Math.max(0, Math.min(step, indicators.length - 1));
    changeItem(item);
  }
  function prevItem() {
    let step = activeIndicator - 1;
    goTo(step);
  }
  function nextItem() {
    let step = activeIndicator + 1;
    goTo(step);
  }
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  if ($$props.showIndicators === void 0 && $$bindings.showIndicators && showIndicators !== void 0)
    $$bindings.showIndicators(showIndicators);
  if ($$props.autoplay === void 0 && $$bindings.autoplay && autoplay !== void 0)
    $$bindings.autoplay(autoplay);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.defaultIndex === void 0 && $$bindings.defaultIndex && defaultIndex !== void 0)
    $$bindings.defaultIndex(defaultIndex);
  if ($$props.active_item === void 0 && $$bindings.active_item && active_item !== void 0)
    $$bindings.active_item(active_item);
  if ($$props.is_vertical === void 0 && $$bindings.is_vertical && is_vertical !== void 0)
    $$bindings.is_vertical(is_vertical);
  if ($$props.allow_infinite_swipe === void 0 && $$bindings.allow_infinite_swipe && allow_infinite_swipe !== void 0)
    $$bindings.allow_infinite_swipe(allow_infinite_swipe);
  if ($$props.goTo === void 0 && $$bindings.goTo && goTo !== void 0)
    $$bindings.goTo(goTo);
  if ($$props.prevItem === void 0 && $$bindings.prevItem && prevItem !== void 0)
    $$bindings.prevItem(prevItem);
  if ($$props.nextItem === void 0 && $$bindings.nextItem && nextItem !== void 0)
    $$bindings.nextItem(nextItem);
  $$result.css.add(css$5);
  indicators = Array(total_elements);
  {
    {
      if (autoplay && !run_interval) {
        played = defaultIndex || active_item;
        run_interval = setInterval(changeView, delay);
      }
      if (!autoplay && run_interval) {
        clearInterval(run_interval);
        run_interval = false;
      }
    }
  }
  return `<div class="${"swipe-panel svelte-1njm1eq"}"><div class="${"swipe-item-wrapper svelte-1njm1eq"}"${add_attribute("this", swipeWrapper, 0)}><div class="${"swipeable-total_elements svelte-1njm1eq"}"><div class="${"swipeable-slot-wrapper svelte-1njm1eq"}">${slots.default ? slots.default({}) : ``}</div></div></div>
  <div class="${"swipe-handler svelte-1njm1eq"}"></div>
  ${showIndicators ? `<div class="${"swipe-indicator swipe-indicator-inside svelte-1njm1eq"}">${each(indicators, (x, i) => {
    return `<span class="${"dot " + escape(activeIndicator == i ? "is-active" : "", true) + " svelte-1njm1eq"}"></span>`;
  })}</div>` : ``}
</div>`;
});
const SwipeItem_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".swipeable-item:not(.is-active){transform:translate3d(100%, 0, 0)}.swipeable-item.svelte-13phq0i{position:absolute;top:0;bottom:0;left:0;right:0;transition-timing-function:ease-out}",
  map: null
};
const SwipeItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active = false } = $$props;
  let { classes = "" } = $$props;
  let { style: style2 = "" } = $$props;
  let { allow_dynamic_height = false } = $$props;
  let swipeItemInner = null;
  let _height = 0;
  createEventDispatcher();
  function firehHeightChange() {
  }
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  if ($$props.style === void 0 && $$bindings.style && style2 !== void 0)
    $$bindings.style(style2);
  if ($$props.allow_dynamic_height === void 0 && $$bindings.allow_dynamic_height && allow_dynamic_height !== void 0)
    $$bindings.allow_dynamic_height(allow_dynamic_height);
  $$result.css.add(css$4);
  {
    allow_dynamic_height && active && _height && requestAnimationFrame(firehHeightChange);
  }
  return `<div class="${"swipeable-item " + escape(classes, true) + " " + escape(active ? "is-active" : "", true) + " svelte-13phq0i"}"${add_attribute("style", style2, 0)}><div class="${"swipeable-item-inner"}"${add_attribute("this", swipeItemInner, 0)}>${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
const Thumbnail_svelte_svelte_type_style_lang = "";
const Indicator_svelte_svelte_type_style_lang = "";
const pcard_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".dog.svelte-1mu2qt9{border-radius:1rem;background-color:rgba(64, 64, 64, 1);border-color:rgba(221, 86, 94, 1);border-width:5px;filter:drop-shadow(0 20px 13px rgb(221 86 94 / 0.3)) drop-shadow(0 8px 5px rgb(211 86 94 / 0.2))}",
  map: null
};
const Pcard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { description } = $$props;
  let { skills } = $$props;
  let { img_path } = $$props;
  let { title_size } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.skills === void 0 && $$bindings.skills && skills !== void 0)
    $$bindings.skills(skills);
  if ($$props.img_path === void 0 && $$bindings.img_path && img_path !== void 0)
    $$bindings.img_path(img_path);
  if ($$props.title_size === void 0 && $$bindings.title_size && title_size !== void 0)
    $$bindings.title_size(title_size);
  $$result.css.add(css$3);
  return `<div class="${"dog mx-8 svelte-1mu2qt9"}">
  
    <div class="${"flex flex-horizontal pt-10 pl-10 pr-10"}"><div class="${"basis-2/4 mx-5 mt-5"}"><img class="${"w-max h-max border-normal rounded-md border-rose-400 border-4 pic"}"${add_attribute("src", img_path, 0)} alt="${"None"}"></div>
    <div class="${"basis-2/4 mx-5"}"><h5 class="${"mb-7 text-" + escape(title_size, true) + " font-bold tracking-normal text-rose-100 dark:text-rose-100 svelte-1mu2qt9"}">${escape(name)}</h5>
        <p class="${"my-5 text-xl font-normal text-rose-100 dark:text-rose-100 leading-normal"}">${escape(description)}</p></div></div>
    <p class="${"py-10 text-xl text-teal-400 italic dark:text-teal-400 font-medium tracking-wider"}">${escape(skills)}</p>
</div>`;
});
const MediaQuery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { query } = $$props;
  let matches = false;
  if ($$props.query === void 0 && $$bindings.query && query !== void 0)
    $$bindings.query(query);
  return `${slots.default ? slots.default({ matches }) : ``}`;
});
const pcardphone_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".dog.svelte-1nxi3iw{border-radius:1rem;background-color:rgba(64, 64, 64, 1);border-color:rgba(221, 86, 94, 1);border-width:4px;filter:drop-shadow(0 20px 13px rgb(221 86 94 / 0.3)) drop-shadow(0 8px 5px rgb(211 86 94 / 0.2))}",
  map: null
};
const Pcardphone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { description } = $$props;
  let { skills } = $$props;
  let { img_path } = $$props;
  let { title_size } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.skills === void 0 && $$bindings.skills && skills !== void 0)
    $$bindings.skills(skills);
  if ($$props.img_path === void 0 && $$bindings.img_path && img_path !== void 0)
    $$bindings.img_path(img_path);
  if ($$props.title_size === void 0 && $$bindings.title_size && title_size !== void 0)
    $$bindings.title_size(title_size);
  $$result.css.add(css$2);
  return `<div class="${"dog mx-8 svelte-1nxi3iw"}"><div class="${"p-5"}"><div class="${"basis-2/4 mx-5 mt-5"}"><img class="${"w-50% h-50% border-normal rounded-md border-rose-400 border-2"}"${add_attribute("src", img_path, 0)} alt="${"None"}"></div>
      <div class="${"basis-2/4 mx-5 mt-5"}"><h5 class="${"mb-7 text-" + escape(title_size, true) + " font-bold tracking-normal text-rose-100 dark:text-rose-100 svelte-1nxi3iw"}">${escape(name)}</h5>
          <p class="${"my-5 text-l font-normal text-rose-100 dark:text-rose-100 leading-relaxed "}">${escape(description)}</p></div>
      <p class="${"pt-5 text-l text-teal-400 italic dark:text-teal-400 font-medium tracking-wider"}">${escape(skills)}</p></div>
</div>`;
});
const projects_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.swipe-holder.svelte-wxmweb{height:80vh;width:100%;justify-self:center}.projects.svelte-wxmweb{background-image:url("../assets/abt_bg.png");font-size:large;height:auto;width:100%}.glass_overlay.svelte-wxmweb{background:#31979560;backdrop-filter:blur(8.6px);-webkit-backdrop-filter:blur(8.6px);display:flex;justify-content:center;align-items:center;height:auto}.title.svelte-wxmweb{color:rgb(64,64,64)}',
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const swipeConfig = {
    autoplay: false,
    delay: 1e3,
    showIndicators: true,
    transitionDuration: 500,
    defaultIndex: 0
  };
  let SwipeComp;
  let project_info = [
    {
      name: "DermaVision",
      description: "A Swift app to increase accessibility to medical knowledge on skin cancer with a machine learning algorithm to detect healthy skin, benign tumors, and malignant tumors. Includes a UV Index Forecast, skin health log, and location-based sunscreen reminders.",
      skills: "Swift | SwiftUI | Firebase | TensorflowLite | Python | Kaggle | Git | Figma",
      img_path: "https://firebasestorage.googleapis.com/v0/b/trialproject2-74281.appspot.com/o/dermavision.png?alt=media&token=e79521c5-e928-4e16-a123-994903fb0741&_gl=1*94w30t*_ga*NDM2Nzc2MjY5LjE2ODY0NTA0NTM.*_ga_CW55HF8NVT*MTY4NjUwOTI0NC4yLjEuMTY4NjUwOTQ5Ny4wLjAuMA..",
      title_size: "5xl"
    },
    {
      name: "BookWorm",
      description: "A platform to give users book recommendations based on genre and topic preferences. Users can save books they are interested in reading based on our curated recommendation algorithm and manual searching. ",
      skills: " React.JS  |  Vite  |  TypeScript | Auth0  |  Yarn  |  Express  |  ChakraUI | Git ",
      img_path: "https://firebasestorage.googleapis.com/v0/b/trialproject2-74281.appspot.com/o/bookworm.png?alt=media&token=7bbbb3c0-f740-46e0-8c45-d3ed54ddbd02&_gl=1*14yt5wz*_ga*NDM2Nzc2MjY5LjE2ODY0NTA0NTM.*_ga_CW55HF8NVT*MTY4NjUwOTI0NC4yLjEuMTY4NjUwOTQ3MS4wLjAuMA..",
      title_size: "5xl"
    },
    {
      name: "Covid-19 Simulator",
      description: "A live simulation showcasing the contraction, spread, vaccine & natural immunization, and death due to COVID-19 within a confined and small population. Displays information with a dynamic colored grid, multiple graphs, and medical forms for each individual.",
      skills: " Java | JavaFX | JSON | Git",
      img_path: "https://firebasestorage.googleapis.com/v0/b/trialproject2-74281.appspot.com/o/covid.png?alt=media&token=180caa98-183f-49e2-aa21-a7531d2fbb8c&_gl=1*oqulbw*_ga*NDM2Nzc2MjY5LjE2ODY0NTA0NTM.*_ga_CW55HF8NVT*MTY4NjUwOTI0NC4yLjEuMTY4NjUwOTM3NS4wLjAuMA..",
      title_size: "4xl"
    }
  ];
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"projects svelte-wxmweb"}"><div class="${"glass_overlay flex-col svelte-wxmweb"}"><div class="${"text-center pt-16"}"><p class="${"pb-10 title md:text-center text-left text-5xl md:text-6xl subpixel-antialiased font-bold tracking-wide svelte-wxmweb"}">My Projects</p></div>

    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 1281px)" }, {}, {
      default: ({ matches }) => {
        return `${matches ? `<div class="${"swipe-holder text-center flex flex-row xl:visible invisible svelte-wxmweb"}"><div class="${"left-button basis-1/12 py-24"}"><button type="${"button"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" version="${"1.1"}" width="${"256"}" height="${"256"}" viewBox="${"0 0 256 256"}" xml:space="${"preserve"}"><defs></defs><g style="${"stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"}" transform="${"translate(89.84902723735408 89.84902723735405) scale(0.84 0.84)"}"><polygon points="${"20.48,45 59.75,90 69.52,81.48 37.69,45 69.52,8.52 59.75,0 "}" style="${"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(64,64,64); fill-rule: nonzero; opacity: 1;"}" transform="${"  matrix(1 0 0 1 0 0) "}"></polygon></g></svg></button></div>

        <div class="${"flex-col basis-10/12"}">${validate_component(Swipe, "Swipe").$$render(
          $$result,
          Object.assign({}, swipeConfig, { this: SwipeComp }),
          {
            this: ($$value) => {
              SwipeComp = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${each(project_info, (project, i) => {
                return `${validate_component(SwipeItem, "SwipeItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Pcard, "PCard").$$render(
                      $$result,
                      {
                        name: project_info[i].name,
                        description: project_info[i].description,
                        skills: project_info[i].skills,
                        img_path: project_info[i].img_path,
                        title_size: project_info[i].title_size
                      },
                      {},
                      {}
                    )}
                `;
                  }
                })}`;
              })}`;
            }
          }
        )}</div>

        <div class="${"right-button basis-1/12 py-24"}"><button type="${"button"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" version="${"1.1"}" width="${"256"}" height="${"256"}" viewBox="${"0 0 256 256"}" xml:space="${"preserve"}"><defs></defs><g style="${"stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"}" transform="${"translate(165.15486381322958 165.15486381322955) rotate(180) scale(0.84 0.84)"}"><polygon points="${"20.48,45 59.75,90 69.52,81.48 37.69,45 69.52,8.52 59.75,0 "}" style="${"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(64,64,64); fill-rule: nonzero; opacity: 1;"}" transform="${"  matrix(1 0 0 1 0 0) "}"></polygon></g></svg></button></div></div>` : ``}`;
      }
    })}

${validate_component(MediaQuery, "MediaQuery").$$render(
      $$result,
      {
        query: "(max-width: 1280px) and (min-width: 900px)"
      },
      {},
      {
        default: ({ matches }) => {
          return `${matches ? `<div class="${"flex-col basis-10/12"}">${each(project_info, (project, i) => {
            return `<div class="${"px-28 py-10 text-center"}">${validate_component(Pcard, "PCard").$$render(
              $$result,
              {
                name: project_info[i].name,
                description: project_info[i].description,
                skills: project_info[i].skills,
                img_path: project_info[i].img_path,
                title_size: project_info[i].title_size
              },
              {},
              {}
            )}
     </div>`;
          })}</div>` : ``}`;
        }
      }
    )}

 ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(max-width: 900px)" }, {}, {
      default: ({ matches }) => {
        return `${matches ? `<div class="${"flex-col basis-10/12 pb-40"}">${each(project_info, (project, i) => {
          return `<div class="${"px-28 py-10 text-center"}">${validate_component(Pcardphone, "PCardPhone").$$render(
            $$result,
            {
              name: project_info[i].name,
              description: project_info[i].description,
              skills: project_info[i].skills,
              img_path: project_info[i].img_path,
              title_size: "3xl"
            },
            {},
            {}
          )}
     </div>`;
        })}</div>` : ``}`;
      }
    })}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.riya.svelte-d1ojbo{background-color:#404040}@media(max-width: 1024px){.riya.svelte-d1ojbo{background-image:url("https://firebasestorage.googleapis.com/v0/b/trialproject2-74281.appspot.com/o/pfp_dark_unused.png?alt=media&token=becc3a81-680d-4320-a774-b93b2cb35fc6");background-size:cover;background-position-x:50% ;background-repeat:no-repeat}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `



${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}


<div class="${"overflow-hidden"}"><section id="${"homepage"}"><div class="${"riya svelte-d1ojbo"}">${validate_component(Homepage, "Homepage").$$render($$result, {}, {}, {})}</div></section>
    <section id="${"about"}">${validate_component(About, "About").$$render($$result, {}, {}, {})}</section>
<section id="${"experience"}">${validate_component(Experience, "Experience").$$render($$result, {}, {}, {})}</section>
<section id="${"projects"}">${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}</section>
</div>`;
});
export {
  Page as default
};
