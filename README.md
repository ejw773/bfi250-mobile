# BFI 250 Progress Bar - Mobile Version

Discover the greatest films of all time. Skip a few. Track your progress.

## Live Website

[www.bfi250.com](https://www.bfi250.com/)

## Expo Snack Site

[BFI 250 Mobile](https://snack.expo.dev/@ejw773/bfi-250-mobile)

## About This Project

Each decade since 1952, the British Film Institute's [Sight & Sound Magazine](https://en.wikipedia.org/wiki/Sight_%26_Sound) has been putting out a carefully compiled list of the greatest films of all time. The published lists are usually 10 titles long, but in 2012 they put out a whopping [250 titles](https://fanwithamovieyammer.wordpress.com/the-sight-sound-top-250-list/).

I created the BFI 250 Progress Bar as a way to track my progress through this list. Two important features for me:

- A button to "Skip" films I don't intend to see
- A visually simple progress bar
- Mobile-friendly

## :hammer_and_wrench: Technologies Used

- Expo Snack
- Javascript
- React Native
- React Native Paper
- Axios
- Redux
- Redux Thunk

## 🖥 Screenshots

![image](https://github.com/ejw773/bfi250-mobile/blob/main/assets/screenshots/main.jpg)
![image](https://github.com/ejw773/bfi250-mobile/blob/main/assets/screenshots/profile.jpg)
![image](https://github.com/ejw773/bfi250-mobile/blob/main/assets/screenshots/about.jpg)

## Demo Video

[![BFI 250 Progress Bar Video Demo](http://img.youtube.com/vi/07n1iiyvbys/0.jpg)](https://www.youtube.com/watch?v=QQWt32ibu-s "Video Demo")

## Code Snippet (Main Screen Component)

```
const Main = () => {
  const dispatch = useDispatch();

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem('user');
    const user = JSON.parse(userData);
    if (user) {
      dispatch(verifyLogin(user));
    }
  };

  useEffect(() => {
    getUserData();
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Profile'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'film';
            } else if (route.name === 'Profile') {
              iconName = 'toggle';
            } else if (route.name === 'About') {
              iconName = 'logo-react';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{ title: 'Progress Bar' }}
        />
        <Tab.Screen name='Profile' component={Profile} />
        <Tab.Screen name='About' component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

```

MIT © Elijah Wilcott
