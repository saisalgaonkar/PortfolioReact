import './AnimatedLetters.scss'


const AnimatedLetters = ({letterClass,strArray,idx}) => {
    return(
        <span>
            {
                // loop through each letter
                strArray.map((char, i) =>(
                    <span key={char+i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters;



