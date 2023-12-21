

import { configureStore } from "@reduxjs/toolkit";
import { CategorySlice } from "./CategorySlice";
import { FetchAllRoomsSlice } from "./RoomByCategorySlice";
import { FetchRoomDetailsSlice } from "./RoomDetailsSlice";
import { BlogSlice } from "./BlogSlice";
import { FetchBlogDetailsSlice } from "./BlogDetailsSlice";
import { RegSlice} from "./regSlice";
import { FetchBlogCommentsSlice } from "./CommentSlice";
import {FetchRoomReviewsSlice } from "./RoomReviewSlice";
import { LogSlice } from "./logSlice";

import { ReviewSlice } from "./reviewCreateSlice";
import { CommentCreateSlice } from "./CommentCreateSlice";
import { ContactUsSlice } from "./ContactSlice";
import { BookingSlice } from "./BookingSlice";
import { AuthSlice } from "./AuthSlice";
import { FetchBookingDetailsSlice } from "./BookingDetailsSlice";






const Store=configureStore({
    reducer:{
        category:CategorySlice.reducer,
        roombycategory:FetchAllRoomsSlice.reducer,
        rooms:FetchRoomDetailsSlice.reducer,
        blogs:BlogSlice.reducer,
        blogdetails:FetchBlogDetailsSlice.reducer,
        // reg:RegSlice.reducer,
        // log:LogSlice.reducer,
        auth:AuthSlice.reducer,
        comments:FetchBlogCommentsSlice.reducer,
        roomreviews:FetchRoomReviewsSlice.reducer,
        review:ReviewSlice.reducer,
        commentcreate:CommentCreateSlice.reducer,
        contactus:ContactUsSlice.reducer,
        booking:BookingSlice.reducer,
        bookingdets:FetchBookingDetailsSlice.reducer
    }
})

export default Store