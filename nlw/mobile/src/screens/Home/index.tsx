import React from "react";
import { View, Image } from "react-native";

import { styles } from "./styles";
import logoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";
import { GAMES } from "../../utils/games";
import { FlatList } from "react-native";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title={"Encontre o seu duo"}
        subtitle={" Selecione o game que deseja jogar.."}
      />
      <FlatList
        data={GAMES}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
      ></FlatList>
    </View>
  );
}
