// default options - these are reverted to
// if there are no options in the browser's sync store.


export interface NumberOpts {
  showToast: number,
  showBookmarksLimit: number,
  space: number,
  fontsize: number,
}

export interface BooleanOpts {
  showToolTips: boolean,
  lock: boolean,
  proportionalSections: boolean,
  showBookmarksSidebar: boolean,
  hideBookmarksInPage: boolean,
  useCustomScrollbar: boolean,
}

export interface StringOpts {
  html: string,
  backup: string,
}

export interface Options extends NumberOpts, BooleanOpts, StringOpts {
  storage: 'local'|'sync',
}


// eslint-disable-next-line import/prefer-default-export
export const OPTS: Options = {

  // NumberOpts
  fontsize: 100,
  showBookmarksLimit: 20,
  showToast: 5,
  space: 100,

  // BooleanOpts
  hideBookmarksInPage: true,
  lock: false,
  proportionalSections: true,
  showBookmarksSidebar: true,
  showToolTips: true,
  useCustomScrollbar: true,

  // StringOpts
  storage: 'local',
  backup: '',
  html: "<section draggable='true' style='background: #CCCCFFCC; color: black;'><h1>Structured Start Tab</h1><nav><section draggable='true' style='flex-grow: 2; background: white;'><h1>Introduction</h1><nav><p style='padding:1em'>Hello!</p><p style='padding:1em'>You have just installed Structured Start Tab, a tool for organising links so they are easy to find and use whenever a new browser tab is opened.  You can fill this page with links and they'll be there every time you open a new tab.  If you add <em>panels</em> they will give the page structure.  Links and panels can me moved around by dragging.</p><p style='padding:1em'>At the side of the page is a toolbar, with buttons for adding links and panels, these can be clicked or dragged onto the page.  You can also open the options page and see what's in the trash.  Recent bookmarks can also be seen in this bar.  Bookmarks can be dragged into the page and permanently organised like any other link.</p><p style='padding:1em'>Try it now - double click on the 'Example' section (below) to open it and see some pre-organised links.  Next time you open a tab, it should look exactly the same as this one, with the same sections open, and all the same links.</p><p style='padding:1em'>When you've got the hang of it, fold this message away by double clicking on 'Introduction' at the top of this section.  When it's no longer needed, you can drag the whole section to the Trash.</p><p style='padding:1em'>Finally, thanks for using this, I hope it's as useful for you as it is for me.  If you can help make it better with suggestions for features, bug reports, or contributions of code, please do.   If you like it, please rate it on the app-store-thingy so more people might give it a try.</p></nav></section><section style='background: white;' draggable='true'><h1>Summary</h1><nav><ul style='padding:1em; margin-left: 2em;'><li><b>Open</b> links with a <em>click</em>.</li></li><li><b>Edit</b> links and sections with a <em>shift-click</em>.</li><li><b>Fold</b> sections with a <em>double-click</em>.</li><li>Organise by dragging.</li><li><b>Undo</b> the last operation with <em>Ctrl+Z</em>.</li><li><b>Toggle</b> sidebar with <em>Ctrl+Shift+B</em>.</li></ul></nav></section></nav></section><section style='background: #F702;' draggable='true' class='folded'><h1>Example</h1><nav><section style='background: #F007;' draggable='true'><h1>A Section</h1><nav><a href='http://example.org' draggable='true' href='http://example.org'>A Link</a><a href='https://portsoc.github.io/hallmarks/' draggable='true'>Hallmarks</a></nav></section><section draggable='true' style='background: #F707;'><h1>Games</h1><nav><a href='https://portsoc.github.io/snake/' draggable='true'>Snake</a><a href='https://portsoc.github.io/countdown/' draggable='true'>Countdown</a></nav></section><section draggable='true' style='background: #FF07;'><h1>Tech Examples</h1><nav><a href='https://portsoc.github.io/canvascircle/' draggable='true'>Circles</a><a href='https://portsoc.github.io/img-melt/test/logos.html' draggable='true'>Image Melt</a><a href='https://portsoc.github.io/duelosc/' draggable='true'>Duelling Oscillators</a><a href='https://portsoc.github.io/tinytooltip/' draggable='true'>TinyToolTip</a><section draggable='true' style='background: #0F07'><h1>Drag-a-Cat</h1><nav><a href='http://portsoc.github.io/dragacat/' draggable='true'>Drag-a-Cat</a><a href='http://portsoc.github.io/dragacat/playground.html' draggable='true'>Playground</a></nav></section></nav></section><section style='background: #00f7; color: white;' draggable='true'><h1>Utilities</h1><nav><a href='https://portsoc.github.io/wordcount/' draggable='true'>Word Count</a><a href='https://portsoc.github.io/dcalc/' draggable='true'>Degree Calculator</a></nav></section></nav></section><section id='trash' class='invisible'><h1>Trash</h1><nav></nav></section>",
};
