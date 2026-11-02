// Profile Card — practical task (React Native basics)
// Follow the steps in README.md and build your solution in this file.
import { View, Text, Image, StyleSheet } from 'react-native';

// Data to display. Do not change it.
const BIO =
  'Building cross-platform apps with React Native. I love clean layouts, accessible design and sharing what I learn with the community.';

const STATS = [
  { label: 'Projects', value: '24' },
  { label: 'Followers', value: '1.2k' },
  { label: 'Following', value: '180' },
];

const SKILLS = [
  'React Native',
  'JavaScript',
  'UI Design',
  'Git',
  'Flexbox'
];

export default function App() {
  return (
    <View style={styles.screen}>
      {/* TODO STEP 1: build the card with View and Text (name, role, location, bio) */}
      <View style={styles.card}>
        {/* TODO STEP 2: add the banner and the avatar with Image */}
        <Image style={styles.banner} resizeMode="cover" source={require('./assets/banner.png')}></Image>
        <Image style={styles.avatar} source={require('./assets/avatar.png')}></Image>
        <View style={styles.body}>
          {/* TODO STEP 3: header row and stats row with Flexbox */}
          <View style={styles.headerText}>
            <Text style={styles.name}>Miguel Armenta</Text>
            <Text style={styles.role}>Developer</Text>
            <Text style={styles.location}>Sin, Mexico</Text>
            <Text style={styles.bio}>Pending?</Text>
          </View>
          <View styles={styles.statsRow}>
            {
              STATS.map((item, index) => (
                <View key={item.label} style={[styles.stats, index - STATS.length - 1 && styles.statsDevider]}>
                  <Text style={styles.statValue}>{item.value}</Text>
                  <Text style={styles.statLabel}>{item.label}</Text>
                </View>
              ))
            }
          </View>
          {/* TODO STEP 4: online badge, skill tags and action buttons (layout) */}
          <View style={styles.body}>
            <View style={styles.headerRow}></View>
            <View>
              {/*<Image source={require('./assets/avatar.png')}></Image>*/}
              <View style={styles.onlineBadge}></View>
            </View>
            <View style={styles.tags}>
              {SKILLS.map((skill) => (
                <View key={skill} style={styles.tag}>
                  <Text style={styles.tagText}>{skill}</Text>
                </View>
              ))}
            </View>
            <View style={styles.actions}>
              <Text style={[styles.button, styles.primaryButton, styles.buttonText]}>Follow</Text>
              <Text style={[styles.button, styles.messageButton, styles.messageText]}>Message</Text>
            </View>
          </View>
          {/* TODO STEP 5: polish the styles (colors, typography, shadow) */}
        </View>
      </View>
      <Text>TODO: build the profile card</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 20,
    backgroundColor: '#EEF1F6',
  },
  // Banner superior
  banner: {
    height: 150,
    backgroundColor: "#5455F5",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 32,
    overflow: "hidden",
  },
  onlineBadge: {
    position: 'absolute',
    right: 4,
    bottom: 4,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#22C55E',
    borderWidth: 3,
    borderColor: '#FFFFFF'
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12
  },
  avatar: {
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: "#FFB74D",
    borderWidth: 8,
    borderColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 25,
  },
  headerText: {
    flex: 1,
    paddingTop: 20,
  },
  // Skills
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 10,
    marginTop: 30,
    gap: 10,
  },
  tag: {
    backgroundColor: "#E6EEFF",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },

  tagText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3474F6",
  },
  // Skills
  // Botones
  button: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 40,
    marginBottom: 40,
    gap: 24,
  },

  primaryButton: {
    flex: 1,
    backgroundColor: "#3474F6",
    borderRadius: 24,
    paddingVertical: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  messageButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#3474F6",
    borderRadius: 24,
    paddingVertical: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  messageText: {
    fontSize: 30,
    fontWeight: "600",
    color: "#3474F6",
  },
});
