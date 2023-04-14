import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

interface Product {
  title: string;
  image: string;
  // add other properties of the product here
}

const App = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const result = await fetch("https://fakestoreapi.com/products");
    const data = await result.json();
    if (data) {
      console.log(data);
      setProducts(data);
    }
  }

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>

      <ScrollView>


        {/* Horizonta; products */}
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 8,
            marginLeft: 8
          }}>My Horizontal Products</Text>

        <FlatList
          data={products}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <>

                <View style={{
                  flexDirection: 'column', width: 200, height: 220, margin: 8,
                  elevation: 8, backgroundColor: 'white', padding: 8, flexWrap: 'nowrap'
                }}>
                  <Image
                    source={{ uri: item.image }}
                    style={{ height: 150, width: 200 }}
                  />
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 12
                    }}>{item.title}</Text>
                </View>

              </>
            )
          }}
        />

          {/* Grid products */}
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 8,
            marginLeft: 8
          }}>My Grid Products</Text>

        <FlatList
          data={products}
          numColumns={2}
          renderItem={({ item, index }) => {
            return (
              <>

                <View style={{
                  flexGrow: 1,
                  flexDirection: 'column',
                  width: '40%',
                  marginVertical: 8,
                  elevation: 8,
                  backgroundColor: 'white',
                  padding: 16,
                  flexWrap: 'nowrap',
                  margin: 8
                }}>
                  <Image
                    source={{ uri: item.image }}
                    style={{ height: 150 }}
                  />
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 12,
                      marginTop: 8
                    }}>{item.title}</Text>
                </View>

              </>
            )
          }}
        />

      </ScrollView>

    </View>
  )
}

export default App