const state = {
    users: [
        {
            id: 1,
            name: 'Abc',
            posts : [
                {id:101, data:'Post 101'},
                {id:102, data:'Post 101'}
            ]
        },
        {
            id: 1,
            name: 'User 1',
            posts : [
                {id:103, data:'Post 103'},
                {id:104, data:'Post 104'}
            ]
        }
    ]
}
// complexity Of Getting a user O(n)
const normalizedState = {
    users:{
        byIds: {
            1 : {
                name : 'User1'
            },
            2: {
                name : 'User2'
            }

        }

    },
    posts:{
        byIds: {
            101: {data: 'Post 101', userId: 1},
            102: {data: 'Post 101', userId: 1},
            103: {data: 'Post 101', userId: 1},
            104: {data: 'Post 101', userId: 1}
        }

    }
}