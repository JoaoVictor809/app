import { Drawer } from "expo-router/drawer";


export default function RootLayout() {

  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{ title: 'Menu principal' }} />
      <Drawer.Screen
        name="pages/boletim"
        options={{ title: 'Boletim' }} />


      <Drawer.Screen
        name="pages/cale"
        options={{ title: 'Calendário' }} />

      <Drawer.Screen
        name="pages/events"
        options={{ title: 'Eventos escolares' }} />

      <Drawer.Screen
        name="pages/contatc"
        options={{ title: 'Contatos' }} />


      <Drawer.Screen name="cale" />
      <Drawer.Screen name="events" />
      <Drawer.Screen name="boletim" />
      <Drawer.Screen name="contatc" />

    </Drawer>


  );
}