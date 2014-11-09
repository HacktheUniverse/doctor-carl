$(function() {
  var pName = "";
  var VintageTxtTest = {
    
    el : $('#doThis'),
    
    go : function go() {
      this.el.vintageTxt({
         text : ["Greetings.", " ", "I'm Doctor Carl.  Your cosmic therapist."]
        ,textSpeed: 60
        ,promptEnabled: false
        ,overlayImage : 'img/terminal.png'
        ,onFinishedTyping : function(){setTimeout(self.intro, 1000);}
      });

    },

    intro : function intro() {
      var texts = [
        ["Please let me know your name."]
      ];

      self.el.vintageTxt('updateOptions', {
        textSpeed: 60
        ,onFinishedTyping : null
        ,onEnterKey : self.pageOne
        ,promptEnabled : true
      });
      self.el.vintageTxt('playMany',texts);
    },

    pageOne : function pageOne(e, inputTxt) {
      pName = inputTxt;
      var texts = [
        ["Nice to meet you, " + pName + ".","  ","Please tell me what's been bothering you."]
      ];
      self.el.vintageTxt('updateOptions', {
        onFinishedTyping : null
        ,onEnterKey : self.pageTwo
        ,promptEnabled : true
      });
      self.el.vintageTxt('playMany',texts);
    },

    pageTwo : function pageTwo(e, inputText) {
      var str = eliza.transform(inputText)
       
      var texts = [
        [str.substring(0, str.length-1) + ", " + pName + str.substring(str.length-1, str.length)]
      ];
      self.el.vintageTxt('updateOptions', {
        onFinishedTyping : null
        ,onEnterKey : self.pageTwo
        ,promptEnabled : true
      });
      self.el.vintageTxt('playMany',texts);
    },

    

  }
  var self = VintageTxtTest;

  VintageTxtTest.go();

});
