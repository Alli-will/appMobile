import { Stack } from 'expo-router';


export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }} 
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