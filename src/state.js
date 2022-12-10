export const state = 
{
    artPage: {
    posts: [
        {title: 'Рей', src: './posts/1.png'},
        {title: 'Ван Сюинь', src: './posts/2.png'},
        {title: 'Хиёнг', src: './posts/3.png'},
        {title: 'Шион', src: './posts/4.png'},
        {title: 'Йорк', src: './posts/Img/posts/5.png'}
    ]
    },
    newsPage: {
        news: ['C++', 'Python', 'C#', 'JS', 'React']
    }
    ,
    
    dialogsPage: {
        profiles: [
                { link: '1', author: 'Рей' },
                { link: '2', author: 'Шион' },
                { link: '3', author: 'Йорк' },
                { link: '4', author: 'Коля' },
                { link: '5', author: 'Влад' }
            ],

            messages1: [{ text: 'Hello', likes: '12' },
            { text: 'Hi', likes: '3' },
            { text: 'How are you', likes: '83' },
            { text: 'Fine, thanks', likes: '5' }],

            messages2: [{ text: 'I love you', likes: '4' },
            { text: 'Love you to', likes: '1' },
            { text: 'I want to stay in your house', likes: '2' },
            { text: 'Ok', likes: '3' }]
    }
    
}