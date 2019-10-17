function getAllInfo(testArr){
    
    let Obj = function(){
        function socialLinks(){
            let arr=[];
            for(let i=0 ;i< document.querySelector('.modal-social-links').children.length-1; i++){
                arr.push(document.querySelector('.modal-social-links').children[i].children[0].href)
            }
            return arr;
        }
    
        this.name = document.querySelector('.modal-content-left').children[1].innerText;
        this.imgSrc = document.querySelector('.modal-content-img').children[0].src;
        this.info = document.querySelector('.modal-pitch').innerText;
        this.country = document.querySelector('.modal-content-left').children[2].innerText;
        this.socialLinks = socialLinks();
    }
    
    let idChilds = 0;

    function getInfo(){
        
    if(idChilds == document.querySelector('.ais-InfiniteHits-list').children.length){
            console.log('AAA')
            console.log(testArr)
            return
        }

        document.querySelector('.ais-InfiniteHits-list').children[idChilds].children[0].click();
        
    setTimeout(function(){
        
      testArr.push(new Obj)
            
      idChilds++;
            
      document.querySelector('.modal__close-btn').click();        
            
    //   getInfo()
        
    },300);
    };
    function pressBtn(){
        let IntrvlID = setInterval(function(){
            if(testBool || (document.querySelector('.ais-InfiniteHits-loadMore--disabled')!=null)){
                clearInterval(IntrvlID);
                console.log('БББ');
                getInfo();
                return;
            }
            // //test
            // testBool = true;
            document.querySelector('.ais-InfiniteHits-loadMore').click();
        },100);
    }
    
    //test bool
    let testBool = false
    pressBtn();
}
let test = [];
getAllInfo(test);