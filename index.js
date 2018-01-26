const backgroundColor = "#263238";
const tabColor = "#1b2428";
const activeTabColor = "#263238";
const foregroundColor = "#c792ea";
const cursorColor = "#e5df2d";
const fontSize = 14;
const fontFamily =
  '"Operator Mono", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace';
const borderColor = "transparent";
const colors = {
  lightBlack: "#586e75",
  black: "#073642",
  lightGreen: "#586e75",
  lightYellow: "#657b83",
  lightBlue: "#839496",
  lightCyan: "#93a1a1",
  white: "#eee8d5",
  lightWhite: "#fdf6e3",
  yellow: "#b58900",
  lightRed: "#cb4b16",
  red: "#dc322f",
  magenta: "#d33682",
  lightMagenta: "#6c71c4",
  blue: "#268bd2",
  cyan: "#2aa198",
  green: "#859900",
  lightWhite: "#ffffff"
};
const padding = "12px 14px";

exports.decorateConfig = config =>
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors,
    fontFamily,
    fontSize,
    padding,
    css: `
		${config.css || ""}
		* {
      -webkit-font-feature-settings: "liga" on, "calt" on, "dlig" on ;
      text-rendering: optimizeLegibility ;
      font-weight: 500;
    }
    .tabs_list {
      border: 0;
    }
    .tabs_nav {
      background-color: ${tabColor};
    }
    .tab_tab {
      color: #536d79;
      border-color: ${borderColor} ;
      background-color: ${tabColor};
    }
    .tab_tab:before {
      border: 0;
    }
    .tab_tab.tab_active {
      border: transparent ;
      font-weight: bold;
      color: #fff ;
      background-color: ${activeTabColor};
    }
    .splitpane_divider {
      background-color: #001f27 ;
    }
	`
  });
