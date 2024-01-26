import {createSlice} from '@reduxjs/toolkit';
import axios from "axios";

let initialState = {
    userCart: [],
    allProducts: [],
    allOrders: [],
    isAuth: false,
    order: {},
    editedOrder: {},
    editedProduct: null,

}

export const userPostsSlice = createSlice({

    name: 'usercart',
    initialState,

    reducers: {
        addDataToUserCartReducer: (state, action) => {
            state.userCart.push(action.payload);
            console.log(action)
        },
        incrementReducer: (state, action) => {
            const {id, updatedData} = action.payload;
            const existingIds = state.userCart.map(cartItem => cartItem.id);

            if (existingIds.includes(id)) {
                state.userCart = [...updatedData];
            }
            // console.log("Action from reducer", action);
            // const existingPostIds = state.userCart.map(post => post.id);
            // const updateData = action.payload.filter(newPost => !existingPostIds.includes(newPost.id));
            // state.userCart.push(...updateData)
            // console.log("arrayCart", state.userCart)


            // state.userCart.map(item => {
            //     console.log("Item from Reducer", item)
            //     // if (item.id == action) {
            //     //     item.count = action
            //     // }
            // })
        },
        decrementReducer: (state, action) => {
            const {id, updatedData} = action.payload;
            const existingIds = state.userCart.map(cartItem => cartItem.id);

            if (existingIds.includes(id)) {
                state.userCart = [...updatedData];
            }
        },
        getAllOrdersReducer: (state, action) => {
            const existingOrders = state.allOrders.map(order => order.id);
            // Фильтруйте новые посты, чтобы исключить дубликаты
            const newOrders = action.payload.filter(newOrder => !existingOrders.includes(newOrder.id));

            // Добавьте только новые посты в state.allPosts
            state.allOrders.push(...newOrders);
        },
        getAllProductsReducer: (state, action) => {
            const existingProducts = state.allProducts.map(product => product.id);
            // Фильтруйте новые посты, чтобы исключить дубликаты
            const newProducts = action.payload.filter(newProduct => !existingProducts.includes(newProduct.id));

            // Добавьте только новые посты в state.allPosts
            state.allProducts.push(...newProducts);
        },
        getOrderReducer: (state, action) => {
            state.order = action.payload
            console.log(state.order)
        },

        isAuthReducer: (state, action) => {
            state.isAuth = action.payload;
        },

        editOrderReducer: (state, action) => {
            state.editedOrder = action.payload;
            console.log(state.editedOrder)
        },

        editProductReducer: (state, action) => {
          state.editedProduct = action.payload;
            console.log(state.editedProduct);
        },

        deleteProductReducer: (state, action) => {
            state.allProducts = state.allProducts.filter(item => item.id !== action.payload);
            console.log('State from delete', state.allProducts);
        },


        clearCartAction: (state) => {
            state.userCart = [];
        },
        // updatePostLikes: (state, action) => {
        //     // Update the likes count for a specific post
        //     const { postId, likesCount } = action.payload;
        //     const post = state.allPosts.find((post) => post.id === postId);
        //     if (post) {
        //       post.likesCount = likesCount;
        //     }
        //   },
        // getUsersPostsReducer: (state, data) => {
        //     console.log('1 getUsersPostsReducer started   =', data.payload)
        //     console.log('current YSER in getUsersPostsReducer ',currentUser)
        //     localStorage.setItem("token", currentUser);
        //     state.userPosts.push(...data.payload);
        //     console.log('localstorage get item in  getUsersPostsReducer',localStorage.getItem("token"))
        //
        // },
        // showAllUserPostsReducer: (state, data) => {
        //     const existingPostIds = state.userPosts.map(post => post.id);
        //     // Фильтруйте новые посты, чтобы исключить дубликаты
        //     const newPosts = data.payload.filter(newPost => !existingPostIds.includes(newPost.id));
        //     // Добавьте только новые посты в state.allPosts
        //     state.userPosts.push(...newPosts);
        // },
        // getAllUsersPostsReducer: (state, data) => {

        //     // state.allPosts.push(null)
        //     console.log('11111AllPosts data =', data.payload)
        //     state.allPosts.push(...data.payload);

        //     // data.payload.forEach(newPost => {
        //     //     if (!state.allPosts.some(existingPost => existingPost.id === newPost.id)) {
        //     //       state.allPosts.push(newPost);
        //     //     }
        //     //   });
        // },
        // getAllUsersPostsReducer: (state, data) => {
        //     // console.log('AllUsers data =', data.payload)
        //     // Извлеките существующие идентификаторы постов
        //     const existingPostIds = state.allPosts.map(post => post.id);
        //
        //     // Фильтруйте новые посты, чтобы исключить дубликаты
        //     const newPosts = data.payload.filter(newPost => !existingPostIds.includes(newPost.id));
        //
        //     // Добавьте только новые посты в state.allPosts
        //     state.allPosts.push(...newPosts);
        //     state.posts.push(...newPosts);
        //
        //     console.log('call new  POSTS from REDUX',newPosts)
        //     // console.log('state AllUsers data =')
        //   },
        //
        // getAllUsersReducer: (state, data) => {
        //      // Извлеките существующие идентификаторы постов
        //     const existingPostIds = state.allUsers.map(user => user.id);
        //
        //     // Фильтруйте новые посты, чтобы исключить дубликаты
        //     const newPosts = data.payload.filter(newPost => !existingPostIds.includes(newPost.id));
        //
        //     // Добавьте только новые посты в state.allPosts
        //     state.allUsers.push(...newPosts);
        //
        // },
        //
        // addPostLikeReducer: (state, data) => {
        //     console.log('4 AllLikes data =', data.payload)
        //     // state.allPosts.push(data.payload);
        //     // dispatch(getAllUsersPostsReducer())
        //     // state.countOfLikes.push(data)
        //     // state.allUsers.push(...data.payload);
        //     // state.someVar=data.payload
        // },
        // addPostCommentaryReducer: (state, data) => {
        //     console.log('4 AllLikes data =', data.payload)
        //     state.allPosts = state.allPosts.map(item => {
        //         if(item.id === data.payload.postId) {
        //             item.commentaries.push(data.payload)
        //             return item
        //         }
        //         return item
        //
        //     })
        //     // state.countOfLikes.push(data)
        //     // state.allUsers.push(...data.payload);
        //     // state.someVar=data.payload
        // },
        //
        // followUserReducer:(state, action) => {
        //     console.log('follow start',action.payload)
        //     state.followedUsers = action.payload;
        //
        //   },
        //
        // unfollowUserReducer:(state, action) => {
        //     console.log('unfollow start',action.payload)
        //     state.followedUsers = action.payload;
        //   },


    }
});


export const {
    addDataToUserCartReducer,
    incrementReducer,
    decrementReducer,
    getAllOrdersReducer,
    clearCartAction,
    getAllProductsReducer,
    isAuthReducer,
    getOrderReducer,
    editOrderReducer,
    editProductReducer,
    deleteProductReducer,

} = userPostsSlice.actions;

export const addToCartProductAction = (item) => async (dispatch) => {
    console.log("Action запустился")
    console.log(item);
    dispatch(addDataToUserCartReducer(item))
};

export const incrementAction = (id, updatedData) => async (dispatch) => {


    dispatch(incrementReducer({id, updatedData}));

};

export const isAuthAction = (isAuth) => async (dispatch) => {


    dispatch(isAuthReducer(isAuth));

};

export const decrementAction = (id, updatedData) => async (dispatch) => {


    dispatch(decrementReducer({id, updatedData}));

};

export const createOrderAction = (data, userCartIds) => async (dispatch) => {


    try {
        const response = await axios.post(`http://localhost:8000/api/store/createorder`, {
            username: data.username,
            phone: data.phone,
            address: data.address,
            status: data.status,
            product_ids: userCartIds,
            totalPrice: data.totalPrice
        })

        // dispatch(getAllUsersPostsReducer(response.data));

    } catch (error) { // Handle errors, e.g., by returning an error object
        throw error;
    }

};

export const editOrderAction = (data, orderId) => async (dispatch) => {
    console.log("Edit Order Action запустился", data)
    await dispatch(editOrderReducer(data))
    try {
        const response = await axios.post(`http://localhost:8000/api/store/order/${orderId}/editorder`, {
            username: data.username,
            phone: data.phone,
            address: data.address,
            status: data.status,
            totalPrice: data.totalPrice,
        })

        console.log("response from edit order action ", response.data);

    } catch (error) { // Handle errors, e.g., by returning an error object
        throw error;
    }

};

// try{
//     axios.post(`${END_POINT}/api/createpost`, formData, {
//         headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'multipart/form-data',
//         },
//     })
//         .then((response) => {
//             console.log('File uploaded successfully:', response.data);
//             dispatch(createPost(response.data))
//         })
//         .catch((error) => {
//             console.error('Error uploading file:', error);
//         });
// }

export const createProductAction = (data) => async (dispatch) => {
    for (const value of data.values()) {
        console.log('formData Values from slice', value);
    }


    try {
        const response = await axios.post(`http://localhost:8000/api/store/createproduct`, data,

            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })


    } catch (error) { // Handle errors, e.g., by returning an error object
        throw error;
    }

};

export const editProductAction = (mainType, type, name, price, productId) => async (dispatch) => {

    console.log('data from editProduct', mainType, type, name, price)


    try {
        console.log('try ////////////////////////////////')
        const response = await axios.post(`http://localhost:8000/api/store/product/${productId}`, {
            mainType, type, name, price, productId
        })
        dispatch(editProductReducer(response.data))
        console.log(response.data)

    } catch (error) { // Handle errors, e.g., by returning an error object
        throw error;
    }

};

export const deleteProductAction = (productId) => async (dispatch) => {
    console.log(productId)
    try {
        const response = await axios.delete(`http://localhost:8000/api/store/product/${productId}`)
        dispatch(deleteProductReducer(productId));
    } catch (error) { // Handle errors, e.g., by returning an error object
        throw error;
    }

};


export const getAllOrdersAction = () => async (dispatch) => {

    try {
        const response = await axios.get(`http://localhost:8000/api/store/allorders`);
        dispatch(getAllOrdersReducer(response.data));

    } catch (error) { // Handle errors, e.g., by returning an error object
        throw error;
    }

};

export const getAllProductsAction = () => async (dispatch) => {

    try {
        const response = await axios.get(`http://localhost:8000/api/store/allproducts`);

        dispatch(getAllProductsReducer(response.data));

    } catch (error) {
        throw error;
    }

};

export const getOrderAction = (orderId) => async (dispatch) => {

    try {
        const response = await axios.get(`http://localhost:8000/api/store/order/${orderId}`);

        dispatch(getOrderReducer(response.data));

    } catch (error) { // Handle errors, e.g., by returning an error object
        throw error;
    }

};

export const getAllUsersPostsAction = () => async (dispatch) => {
    console.log('1 getAllUserPostsAction STARTED');

    const token = localStorage.getItem('token');

    // console.log('2 getUsersPosts token=', token);
    let decodedToken = jwt_decode(token)
    // console.log('3 getUsersPosts decoded=', decodedToken.username);

    if (!token) { // Handle the case where the token is not available or invalid
        console.error('Token not available');
        return;
    }

    try {
        const response = await axios.get(`${END_POINT}/api/post/all`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        });
        // console.log('response from axios=',response.data)
        dispatch(getAllUsersPostsReducer(response.data));


    } catch (error) { // Handle errors, e.g., by returning an error object
        throw error;
    }
}


export const getAllUsersAction = () => async (dispatch) => {
    // console.log('1 getAllUserPostsAction STARTED');
    const token = localStorage.getItem('token');

    // console.log('2 getUsersPosts token=', token);
    // let decodedToken = jwt_decode(token)
    // console.log('3 getUsersPosts decoded=', decodedToken.username);

    if (!token) { // Handle the case where the token is not available or invalid
        console.error('Token not available');
        return;
    }


    const response = await axios.get(`${END_POINT}/api/getallusers`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    });
    // console.log('response from axios=',response.data)
    dispatch(getAllUsersReducer(response.data));


}

export const showAllUserPosts = () => async (dispatch) => {
    const token = localStorage.getItem("token");
    const response = await axios.get('http://157.245.193.184:3002/api/post', {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    // console.log('response data', response.data)
    dispatch(showAllUserPostsReducer(response.data))
}

export const addPostLikeAction = (post) => async (dispatch) => {
    // console.log('1 addPostLikeAction STARTED',post);

    // console.log('2 addPostLikeAction POSTID',postId);

    const token = localStorage.getItem('token');

    // console.log('2 getUsersPosts token=', token);
    let decodedToken = jwt_decode(token)
    // console.log('3 getUsersPosts decoded=', decodedToken.username);

    if (!token) { // Handle the case where the token is not available or invalid
        console.error('Token not available');
        return;
    }


    const response = await axios.post(`${END_POINT}/api/like/post/${post.id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    });
    console.log('3 addPostLikeAction response from axios=', response.data)
    dispatch(addPostLikeReducer(response.data));


}


export const followUserAction = (userId) => async (dispatch) => {

    const token = localStorage.getItem('token');

    if (!token) {
        console.error('Token not available');
        return;
    }

    try {
        // Perform the follow action using the token
        const response = await axios.post(`${END_POINT}/api/follow/${userId}`, null, {headers: {Authorization: `Bearer ${token}`}});

        // Assuming the response contains the updated list of followed users
        dispatch(followUserReducer(response.data));
    } catch (error) {
        console.error('Error following user:', error);
    }
};


export const unfollowUserAction = (userId) => async (dispatch) => {
    const token = localStorage.getItem('token');

    if (!token) {
        console.error('Token not available');
        return;
    }

    // console.log('token when unfollow= ',token)
    try {
        // Perform the follow action using the token
        const response = await axios.delete(`${END_POINT}/api/unfollow/${String(userId)}`, {headers: {Authorization: `Bearer ${token}`}});

        // Assuming the response contains the updated list of followed users
        dispatch(unfollowUserReducer(response.data));
    } catch (error) {
        console.error('Error following user:', error);
    }
};


export const addPostCommentAction = (comment, post) => async (dispatch) => {
    console.log('1 addPostCommentAction STARTED', comment, 'postID=', post.id);

    // console.log('2 addPostLikeAction POSTID',postId);

    const token = localStorage.getItem('token');
    // console.log('2 getUsersPosts token=', token);
    let decodedToken = jwt_decode(token)
    // console.log('3 getUsersPosts decoded=', decodedToken.username);
    if (!token) { // Handle the case where the token is not available or invalid
        console.error('Token not available');
        return;
    }


    const response = await axios.post(`${END_POINT}/api/comment/${post.id}`, {commentary: comment}, {
        headers: {
            'Authorization': `Bearer ${token}`,

        }
    });
    console.log('3 addPostLikeAction response from axios=', response.data)
    dispatch(addPostCommentaryReducer(response.data));


}


// export const createUser = (email, name, password, username) => (dispatch) => {
//     // console.log('1 createUser запустился ', email, name, password, username);

//     axios.post(`${END_POINT}/api/auth/createuser`, {
//         email: email,
//         name: name,
//         username: username,
//         password: password
//     }).then((res) => {
//         dispatch(authorize(res.data));
//     });
// };


// export const authUser = (email, password) => (dispatch) => {
//     localStorage.removeItem("token")
//     // console.log('1 createUser запустился ', email, password);

//     axios.post(`${END_POINT}/api/auth/login`, {
//         email: email,
//         password: password
//     }).then((res) => {
//         dispatch(authorize(res.data));
//     });
// };


// export const logoutAction = () => (dispatch) => {
//     // console.log('logoutAction started/');


//     dispatch(logout());

// };


export default userPostsSlice.reducer;