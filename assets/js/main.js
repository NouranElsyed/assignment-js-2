function generate (){
    var quotes ={
        "Tal bekerman": '“ life is not about black and white,look around and you will see that the world is much more colorful than you though. “',
        "Kierra C.T. Banks": '“Progress is quiet until it is not.”',
        "Nelson Mandela": '“The greatest glory in living lies not in never falling, but in rising every time we fall. ',
        "Walt Disney": '“The way to get started is to quit talking and begin doing. ”',
        "Steve Jobs": '“Your time is limited, so do not waste it living someone else..s life. Do not be trapped by dogma – which is living with the results of other people..s thinking.”',
        "Eleanor Roosevelt": '“The future belongs to those who believe in the beauty of their dreams.”',
        "Oprah Winfrey": '“If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough.”',
        "James Cameron": '“If you set your goals ridiculously high and it is a failure, you will fail above everyone else..s success.”',
        "Kierra C.T. Banks": '“Every battle is lost or won in the arena of the mind.”',
        "Shiva Negi": '“The success of your life is in direct proportion to the dedication you put into it.”',

    }
    var authors = Object.keys(quotes);
   
    var author = authors[Math.floor(Math.random()*authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}