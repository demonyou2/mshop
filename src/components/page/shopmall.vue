<template>
    <div class="xw_shopmall">
        <!-- searchBar -->
        <div class="search_bar">
            <van-row>
                <van-col span="3"><img :src="locationBtn" width="100%" class="location_icon"></van-col>
                <van-col span="16"><input type="text" class="search_input"/></van-col>
                <van-col span="5"><van-button size="mini">查找</van-button></van-col>
            </van-row>
        </div>
        <!-- bannerSwipe -->
        <div class="swiper_area">
            <van-swipe :autoplay="1500">
                <van-swipe-item v-for="(item,index) in bannerSwipe" :key="index">
                    <img :src="item.image" width="100%">
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- typeBar -->
        <div class="type_bar">
            <div v-for="(item,index) in category" :key="index">
                <img :src="item.image" alt="">
                <span>{{item.mallCategoryName}}</span>
            </div>
        </div>
        <!-- adBanner -->
        <div class="ad_banner">
            <img :src="adBanner.PICTURE_ADDRESS" alt="">
        </div>
        <!--Recommend goods area-->
        <div class="recommend_area">
            <div class="recommend_title">
                商品推荐
            </div>
            <div class="recommend_body">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) in recommendGoods" :key="index">
                        <div class="recommend_item">
                            <img :src="item.image" width="80%" />
                            <div>{{item.goodsName}}</div>
                            <div>￥{{item.price}} (￥{{item.mallPrice}})</div>
                        </div>
                    </swiper-slide>    
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import 'swiper/dist/css/swiper.css';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    export default {
        data() {
            return {
                locationBtn: require('../../assets/imgs/locationBtn.png'),
                bannerSwipe: [],
                category:[],
                adBanner:'',
                recommendGoods:[],
                swiperOption:{
                    slidesPerView: '3'
                }
            }
        },
        components:{
            swiper,swiperSlide
        },
        created(){
            this.getInfos();
        },
        methods:{
            getInfos(){
                axios({
                    url:'https://www.easy-mock.com/mock/5ba9efffa6d0c217003a603e/index/index',
                    method:'get'
                })
                .then((response) => {
                    console.log(response);
                    if(response.status == '200'){
                        this.bannerSwipe = response.data.data.slides;
                        this.category = response.data.data.category;
                        this.adBanner = response.data.data.advertesPicture;
                        this.recommendGoods = response.data.data.recommend;
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.xw_shopmall{
    width: 10rem;
    height: 100%;
    .search_bar{
        width: 100%;
        height: 1.2rem;
        line-height: 1.2rem;
        background: #e5017d;
        overflow: hidden;
        .location_icon{
            width: 70%;
            padding-left: 0.1rem;
            padding-top: 0.1rem;
        }
        .search_input{
            width:100%;
            height: 1rem;
            border-top:0px;
            border-left:0px;
            border-right:0px;
            border-bottom: 1px solid 1px !important ;
            background-color: #e5017d;
            color:#fff;     
        }

    }
    .swiper_area{
        width: 10rem;
        height: 5rem;
        clear: both;
    }
    .type_bar{
        margin-top: -0.3rem;
        width: 100%;
        display: flex;
        justify-content: center;
        div{
            flex: 1;
            text-align: center;
            img{
                display: block;
                width: 90%;
                margin-left: 0.1rem;
            }
        }
    }
    .ad_banner{
        width: 100%;
        img{
            width: 10rem;
        }
    }
    .recommend_area{
        background-color: #fff;
        margin-top: .3rem;
        .recommend_title{
            border-bottom:1px solid #eee;
            font-size:14px;
            padding:.2rem;
            color:#e5017d;
        }   
        .recommend_body{
            border-bottom: 1px solid #eee;
            .recommend_item{
                width:99%;
                border-right: 1px solid #eee;
                font-size: 12px;
                text-align: center;
            }            
        }
    }
 
}

</style>
