import React from 'react';
import styles from './index.module.css'
import Header from "./Components/Header/Header";
import InfoBar from "./Components/InfoBar/InfoBar";
import ProductItem from "./Components/Product/ProductItem/ProductItem";
import Product from "./Components/Product/Product";
import ProductContainer from "./Components/Product/ProductContainer/ProductContainer";
import TabBar from "./Components/TabBar/TabBar";
import TabBarContainer from "./Components/TabBar/TabBarContainer/TabBarContainer";
import References from "../../Components/GlobComp/References";

const Index = () => {
    return (
        <div className={styles.Index}>
            <Header/>
            <InfoBar/>

            <Product description={'Choose Your Favorite'} text={'CHUẨN GU ĐÚNG VỊ'} variant={'left'}>
                <ProductContainer rows={2} columns={2}>
                    <ProductItem
                        price={'99.000'} title={'REVO Morning'} description={'đắng, hậu ngọt, hương hoa'}
                        src={'flex1.png'} variant={'flex'}/>
                    <ProductItem
                        price={'85.000'} title={'REVO Everyday'} description={'cân bằng, hậu đắng, vị chocolate'}
                        src={'flex2.png'} variant={'flex'}/>
                    <ProductItem
                        price={'139.000'} title={'REVO Origin'} description={'hậu ngọt, ít đắng, vị chua dâu'}
                        src={'flex3.png'} variant={'flex'}/>
                    <ProductItem
                        price={'75.000'} title={'REVO Đậm Đà'} description={'đậm đà, đắng, truyền thống'}
                        src={'flex4.png'} variant={'flex'}/>
                    <ProductItem
                        price={'99.000'} title={'REVO Morning'} description={'đắng, hậu ngọt, hương hoa'}
                        src={'flex1.png'} variant={'flex'}/>
                    <ProductItem
                        price={'85.000'} title={'REVO Everyday'} description={'cân bằng, hậu đắng, vị chocolate'}
                        src={'flex2.png'} variant={'flex'}/>
                    <ProductItem
                        price={'139.000'} title={'REVO Origin'} description={'hậu ngọt, ít đắng, vị chua dâu'}
                        src={'flex3.png'} variant={'flex'}/>
                    <ProductItem
                        price={'75.000'} title={'REVO Đậm Đà'} description={'đậm đà, đắng, truyền thống'}
                        src={'flex4.png'} variant={'flex'}/>
                    <ProductItem
                        price={'75.000'} title={'REVO Đậm Đà'} description={'đậm đà, đắng, truyền thống'}
                        src={'flex4.png'} variant={'flex'}/>
                </ProductContainer>
            </Product>

            <TabBar>
                <TabBarContainer />
            </TabBar>

            <Product text={'COMBO PHIN PHÊ'} description={'Your Personalized Coffee'} variant={'right'}>
                <ProductContainer rows={1} columns={3}>
                    <ProductItem price={'147.000'} oldPrice={'155.000'}
                                 title={'Combo Revo Đậm Đà'} description={'Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh táo làm việc...'}
                        src={'box1.png'} variant={'box'}/>
                    <ProductItem price={'156.000'} oldPrice={'165.000'}
                                 title={'Combo Revo Everyday'} description={'Revo Everyday được phối trộn giữa vị đắng của hạt Robusta và hương thơm...'}
                        src={'box2.png'} variant={'box'}/>
                    <ProductItem price={'275.000'} oldPrice={'260.000'}
                                 title={'Combo Revo Honey'} description={'Honey – trong tên gọi Revo Honey đến từ phương pháp chế biến hạt Arabica...'}
                        src={'box3.png'} variant={'box'}/>
                    <ProductItem price={'147.000'} oldPrice={'155.000'}
                                 title={'Combo Revo Đậm Đà'} description={'Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh táo làm việc...'}
                                 src={'box1.png'} variant={'box'}/>
                    <ProductItem price={'156.000'} oldPrice={'165.000'}
                                 title={'Combo Revo Everyday'} description={'Revo Everyday được phối trộn giữa vị đắng của hạt Robusta và hương thơm...'}
                                 src={'box2.png'} variant={'box'}/>
                    <ProductItem price={'275.000'} oldPrice={'260.000'}
                                 title={'Combo Revo Honey'} description={'Honey – trong tên gọi Revo Honey đến từ phương pháp chế biến hạt Arabica...'}
                                 src={'box3.png'} variant={'box'}/>
                    <ProductItem price={'147.000'} oldPrice={'155.000'}
                                 title={'Combo Revo Đậm Đà'} description={'Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh táo làm việc...'}
                                 src={'box1.png'} variant={'box'}/>
                </ProductContainer>
            </Product>

            <References/>

        </div>
    );
};

export default Index;