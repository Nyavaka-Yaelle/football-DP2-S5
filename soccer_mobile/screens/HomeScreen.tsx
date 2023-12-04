import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import { fetchDataSvc } from "../services/main.services";

const styles = StyleSheet.create({
  button_container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginTop: 20,
  },
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
});

const HomeScreen = () => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const _data = await fetchDataSvc("/");
      // console.log(_data);
      setData(_data);
    };
    // fetch initial data on app load
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRefetchData = async (_subTab) => {
    let dataUrl = "";
    switch (_subTab) {
      case "general":
        dataUrl += "";
        break;
      case "inside":
        dataUrl += "/domicile";
        break;
      case "outside":
        dataUrl += "/exterieur";
        break;

      default:
        break;
    }
    const _data = await fetchDataSvc(dataUrl);
    setData(_data);
  };

  return (
    <View>
      <View style={styles.button_container}>
        <Button
          title="General"
          onPress={() => handleRefetchData("general")}
        ></Button>
        <Button
          title="Domicile"
          onPress={() => handleRefetchData("inside")}
        ></Button>
        <Button
          title="Exterieur"
          onPress={() => handleRefetchData("outside")}
        ></Button>
      </View>
      <ScrollView horizontal>
        <View style={styles.container}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Equipe</DataTable.Title>
              <DataTable.Title>Competition</DataTable.Title>
              <DataTable.Title>Buts</DataTable.Title>
              <DataTable.Title>Tirs pm</DataTable.Title>
              <DataTable.Title>Disciplines</DataTable.Title>
              <DataTable.Title>Possessions</DataTable.Title>
              <DataTable.Title>Passe reussites</DataTable.Title>
              <DataTable.Title>Aeriens gagnes</DataTable.Title>
              <DataTable.Title>notes</DataTable.Title>
            </DataTable.Header>
            {data.map((item, key) => {
              return (
                <DataTable.Row key={key}>
                  <DataTable.Cell>{item.nomEquipe}</DataTable.Cell>
                  <DataTable.Cell>{item.nomCompetition}</DataTable.Cell>
                  <DataTable.Cell>{item.buts}</DataTable.Cell>
                  <DataTable.Cell>{item.tirsCAPm}</DataTable.Cell>
                  <DataTable.Cell>
                    {item.carteJaune} / {item.carteRouge}
                  </DataTable.Cell>
                  <DataTable.Cell>{item.possession}</DataTable.Cell>
                  <DataTable.Cell>{item.passesReussies}</DataTable.Cell>
                  <DataTable.Cell>{item.AeriensGagnes}</DataTable.Cell>
                  <DataTable.Cell>{item.note}</DataTable.Cell>
                </DataTable.Row>
              );
            })}
          </DataTable>
        </View>
      </ScrollView>
      {/* <View style={styles.container}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Equipe</DataTable.Title>
            <DataTable.Title>Competition</DataTable.Title>
            <DataTable.Title>Buts</DataTable.Title>
            <DataTable.Title>Tirs pm</DataTable.Title>
            <DataTable.Title>Disciplines</DataTable.Title>
            <DataTable.Title>Possessions</DataTable.Title>
            <DataTable.Title>Passe reussites</DataTable.Title>
            <DataTable.Title>Aeriens gagnes</DataTable.Title>
            <DataTable.Title>notes</DataTable.Title>
          </DataTable.Header>
          {data.map((item, key) => {
            return (
              <DataTable.Row key={key}>
                <DataTable.Cell>{item.nomEquipe}</DataTable.Cell>
                <DataTable.Cell>{item.nomCompetition}</DataTable.Cell>
                <DataTable.Cell>{item.buts}</DataTable.Cell>
                <DataTable.Cell>{item.tirsCAPm}</DataTable.Cell>
                <DataTable.Cell>
                  {item.carteJaune} / {item.carteRouge}
                </DataTable.Cell>
                <DataTable.Cell>{item.possession}</DataTable.Cell>
                <DataTable.Cell>{item.passesReussies}</DataTable.Cell>
                <DataTable.Cell>{item.AeriensGagnes}</DataTable.Cell>
                <DataTable.Cell>{item.note}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
        </DataTable>
      </View> */}
    </View>
  );
};

export default HomeScreen;
