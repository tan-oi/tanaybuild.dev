import { THEME_IDS } from "@/lib/themes";

// Runs before first paint so the saved theme never flashes the default.
const script = `(function(){try{
var ids=${JSON.stringify(THEME_IDS)};
var t=localStorage.getItem("theme");
if(!t||ids.indexOf(t)<0)t="graphite";
var c=ids.map(function(i){return "theme-"+i});
document.documentElement.classList.remove.apply(document.documentElement.classList,c);
document.body&&document.body.classList.remove.apply(document.body.classList,c);
document.documentElement.classList.add("theme-"+t);
}catch(e){}})()`;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: script }} />
      {children}
    </>
  );
}
