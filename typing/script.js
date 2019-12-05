(function () {
  let startBtn = $('.startBtn');
  let mainInput = $('.main-input');
  let allLines = $('.line');
  let allText = [];
  let score = 0;
  let displayResult = $('.display-result')

  startBtn.on('click' ,startGame);

  function startGame() {
    $(this).hide();
    mainInput.focus();

    //setup
    let speed = 1;
    let textLength =  3;
    let typingWords = words.filter(word => word.length == textLength);
    let lvl = 6;

    let speedup = setInterval(function () {
    	textLength++;
    	typingWords = words.filter(word => word.length == textLength);
    },20000)

    mainInput.on('keyup' ,checkInputTyping);
    function checkInputTyping() {
    	let inputVal = $(this).val();
    	let self = $(this);
    	if(allText.includes(inputVal)){
    		let index = allText.indexOf(inputVal);
    		allText.splice(index,1);
    		$('span').filter(function (){
    			return $(this).text() == inputVal;
    		}).css('background' ,'blue').fadeOut(100,function ()  {
    			$(this).remove();
    		})
    		self.val("");
    		score++;
    		displayResult.html(score)
    	}
    }

    //insert spans

    function insertSpans() {
      for (var i = 0; i < allLines.length; i++) {
       let rand = Math.floor(Math.random() * 20);
       if(rand <= lvl){
         let text = chooseText();
         allText.push(text);
         $(allLines[i]).append('<span>'+text+'</span>')
       }
      }
      setTimeout(insertSpans,7000);
    }
    insertSpans();

    function chooseText() {
      let rand = Math.floor(Math.random() * typingWords.length);
      let savedText = typingWords[rand];
      typingWords.splice(rand,1);

      return savedText;
    }

    // ANIMATION

    let moveAll = setInterval(function () {
    	let allspans = $('span');
    	allspans.css({
    		left : '+='+speed
    	})
    	$.each(allspans,(index,el)=>{
    		let position = $(el).position().left;
    		if(position > 850){
    			clearAllIntervals()
    		}else if(position > 700 && position < 710){
    			$(el).addClass('danger');
    		}
    	})
    },10)

    function clearAllIntervals() {
    	clearInterval(moveAll);
    }
   }

})()

    //prank
    const openModalButtons = document.querySelectorAll('[data-modal-target]')
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay')

    openModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
      })
    })

    overlay.addEventListener('click', () => {
      const modals = document.querySelectorAll('.modal.active')
      modals.forEach(modal => {
        closeModal(modal)
      })
    })

    closeModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
      })
    })

    function openModal(modal) {
      if (modal == null) return
      modal.classList.add('active')
      overlay.classList.add('active')
    }

    function closeModal(modal) {
      if (modal == null) return
      modal.classList.remove('active')
      overlay.classList.remove('active')
      var x = document.getElementsByTagName("body");
      x[0].style.transform = "scaleX(-1)";
    }
