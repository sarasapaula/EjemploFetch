import React, {useEffect,useState} from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';
import { Card } from '../components';
import {getMovies_fetch} from '../controller/controller';

const { width } = Dimensions.get('screen');


function Home (){
  const[movies,setMovies]= React.useState([]);
  
  useEffect(() => {
    getMovies_fetch(setMovies);
  }, []);
  
    return (
      <Block flex center style={styles.home}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.articles}>
          <Block flex>
          { movies.map((movie)=>{
              
             return(
              <Card key={movie.id} item={movie}   />              
            );
            }
          )}          
          
          </Block>
        </ScrollView>
      </Block>
    );
  
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
