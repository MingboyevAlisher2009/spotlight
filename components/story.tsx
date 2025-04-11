import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "@/styles/feed.styles";
import { Image } from "react-native";

interface Story {
  id: string;
  username: string;
  avatar: string;
  hasStory: boolean;
}

export default function Story({ story }: { story: Story }) {
  return (
    <TouchableOpacity style={styles.storyWrapper}>
      <View style={[styles.storyRing, !story.hasStory && styles.noStory]}>
        <Image source={{uri: story.avatar}}/>
      </View>
      <Text style={styles.storyUsername}>{story.username                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       }</Text>
    </TouchableOpacity>
  );
}
