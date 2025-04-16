import { View, Text, FlatList } from "react-native";
import React from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Loader from "@/components/Loader";
import { COLORS } from "@/constants/theme";
import { styles } from "@/styles/notifications.styles";
import { Ionicons } from "@expo/vector-icons";
import NotificationItem from "../../components/notification-item";

export default function Notifications() {
  const notifications = useQuery(api.notifications.getNotifications);

  if (notifications === undefined) return <Loader />;
  if (notifications.length === 0) return <NoNotificationsFound />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <FlatList
        data={notifications}
        renderItem={({ item }) => <NotificationItem notification={item} />}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const NoNotificationsFound = () => (
  <View style={[styles.container, styles.centered]}>
    <Ionicons name="notifications-outline" size={48} color={COLORS.primary} />
    <Text style={{ fontSize: 20, color: COLORS.white }}>
      No notifications yet
    </Text>
  </View>
);
