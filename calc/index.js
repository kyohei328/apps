(() => {
    const $doc = document
    const $calc = $doc.getElementById('js-calc')
    const $button = document.getElementsByTagName('button')
    const $input = document.getElementsByTagName('input')

    let index = 0
    const buttonLen = $button.length

    while(index<buttonLen){
        $button[index].addEventListener('click',(e)=> handClick(e))
            index++
    }
    
    let result=""

    const handClick = (e) => {
        const $this = e.target
        const $targetText = $this.textContent
        

        if($targetText === "="){
            $input[0].value = eval(result)
            console.log(result)
        }else if($targetText === "AC"){
            result = ""
            $input[0].value = result
        }else if($targetText === "×"){
            result = result + "*"
            $input[0].value += $targetText
        }else if($targetText === "÷"){
            result = result + "/"
            $input[0].value += $targetText
        }else if($targetText === "％"){
            $input[0].value = $input[0].value / 100
            result = result / 100
        }else if($targetText === "±"){
                $input[0].value = -($input[0].value)
                result = -result
        }else{
            $input[0].value += $targetText
            result += $targetText
            console.log(result)
        }


    } 

})()