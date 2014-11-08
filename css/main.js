$(function() {
  var pName = "";
  var VintageTxtTest = {
    
    el : $('#doThis'),
    
    go : function go() {
      this.el.vintageTxt({
         text : ["Welcome to Doctor Carl your something something therepist etc.",""]
        ,textSpeed: 60
        ,promptEnabled: false
        ,overlayImage : 'img/oldmac.png'
        ,onFinishedTyping : this.intro
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
        ["Nice to meet you, " + pName + ".","Please tell me what's been bothering you."]
      ];
      self.el.vintageTxt('updateOptions', {
        onFinishedTyping : null
        ,onEnterKey : self.pageTwo
        ,promptEnabled : true
      });
      self.el.vintageTxt('playMany',texts);
    },

    pageTwo : function pageTwo(e, inputText) {
      
      var texts = [
        [eliza.transform(inputText) +", "+ pName + "."]
      ];
      self.el.vintageTxt('updateOptions', {
        onFinishedTyping : null
        ,onEnterKey : self.pageTwo
        ,promptEnabled : true
      });
      self.el.vintageTxt('playMany',texts);
    },

    pageThree : function pageThree(e, inputText) {
      console.log(inputText);
      var texts = [
        [eliza.transform(inputText) +", "+ pName + "."]
      ];
      self.el.vintageTxt('updateOptions', {
        onFinishedTyping : null
        ,onEnterKey : self.pageThree
        ,promptEnabled : true
      });
      self.el.vintageTxt('playMany',texts);
    },

    pageFour : function pageFour() {
      self.el.vintageTxt('reset'
        ,["Not to mention the callbacks!","Oh, the callbacks!"," ","Watch what happens when I'm done typing..."]
        ,{ maxRows : 10
           ,onFinishedTyping : function(){setTimeout(self.spawnNew, 2000);} 
         }
      );
    },

    spawnNew : function spawnNew() {
      $('#miniTxt').vintageTxt({
        promptEnabled : false
        ,onFinishedTyping : function(){setTimeout(self.finalPage, 1000);}
      });
    },

    finalPage : function finalPage() {
      self.el.vintageTxt('reset'
        ,["So there you have it.","And plenty more features,","coming soon!","... in my imagination.","... so proabably never."," ","But never mind that.","Best to enjoy what you have,","and be greatful."," ","ttfn"]
        ,{  onFinishedTyping: null
           ,onEnterKey: null
           ,promptEnabled : true
         }
      );
    }

  }
  var self = VintageTxtTest;

  VintageTxtTest.go();

});
