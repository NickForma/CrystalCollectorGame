$(document).ready(function () {

    //Define Global vars, then your functions, then the rest of your code under that
    let counter = 0;


    //Listing gems and pics
    const gemArray = [
        {
            name: 'gem1',
            url: './assets/images/bluegem.jfif'
        },
        {
            name: 'gem2',
            url: './assets/images/orangegem.jfif'
        },
        {
            name: 'gem3',
            url: './assets/images/raindbowgem.jfif'
        },
        {
            name: 'gem4',
            url: './assets/images/redgem.jfif'
        }
    ]

    //target number Function, it returns a random number between ((((((19-120.))))) 
    const targetNum = function () {
        return Math.floor(Math.random() * 101) + 19
    }

    let randomNum = targetNum(); 

    //Assign our randomNum to the DOM
    $('#object-num').text(randomNum)

    //Generate a random number between 1-13 for data-value attribute of gem elements on DOM
    const randNum = function () {
        return Math.floor(Math.random() * 12) + 1
    }

    //Create buttons of gems, with unique values.
    const elementBuilder = function (e) {
        return (
            `<button data-value='${randNum()}' class="gem" id='${e.name}' type="button">
                <img src='${e.url}'>
            </button>`
        )
    }

    //Append a new gem button to (.container) with each element (e) inside of gemArray.
    gemArray.forEach(function (e) {
        $('.container').append(elementBuilder(e))
    })


    //Click Handler(s):
    //When we click a button, do this stuff
    $('.gem').on('click', function (e) {
        //num = Clicked buttons value.
        let num = parseInt(e.currentTarget.dataset.value)

        counter += num
        console.log(counter)

        $('#current-num').text(counter)
        //Check if counter = a random number, chosen at game initialize as global var randomNum
        //If true {  DO STUFF CAUSE WE WON       }
        //   else if (counter < randomNum) { still less, go again?  }
        //   else if (counter > randomNum) { went over, lose }

        if (counter === randomNum){
            console.log('hoopla')
        }else if (counter < randomNum){
           console.log('pants')
        }
    })
    //
})