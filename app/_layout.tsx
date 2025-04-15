import { Stack } from 'expo-router';


export default function RootLayout() {
  return (
    console.log('Rotas registradas:', require('expo-router/build/views/Navigator').routes),
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ headerShown: true }} 
      />
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="(stack)/categories/index" 
        options={{  title:'', headerShown: true }} 
      />
      <Stack.Screen 
        name="(stack)/categories/[categoryid]/index" 
        options={{  title:'', headerShown: true }}  
      />
      <Stack.Screen 
        name="(stack)/product/[id]" 
        options={{  title:'', headerShown: true }} 
      />
    </Stack>
  );
}