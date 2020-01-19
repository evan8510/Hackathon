const word = class {
  constructor(wordname, definition) {
    this.wordname = wordname;
    this.definition = definition;
  }
  getWord() {
    return this.wordname;
  }
  getDefn() {
    return this.definition;
  }
  setDefn(newDefn) {
    this.definition = newDefn;
  }
};

$(window).load(function() {
  $(".trigger_popup_fricc").click(function() {
    $(".hover_bkgr_fricc").show();
  });
  $(".hover_bkgr_fricc").click(function() {
    $(".hover_bkgr_fricc").hide();
  });
  $(".popupCloseButton").click(function() {
    $(".hover_bkgr_fricc").hide();
  });
});
