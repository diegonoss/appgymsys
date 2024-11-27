import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Navbar from '../components/Navbar';
import usePerfilData from '../hooks/usePerfilData';

const PerfilScreen = ({ setScreen, screen }) => {
  const { perfil, loading } = usePerfilData();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#346cb0" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Navbar
        title="Perfil"
        onNavigateBack={() => setScreen('Landing')}
        screen={screen}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.profileContainer}>
          <Text style={styles.profileTitle}>Información del Atleta</Text>

          <View style={styles.profileDetail}>
            <Text style={styles.label}>ID</Text>
            <Text style={styles.value}>{perfil.id}</Text>
          </View>

          <View style={styles.profileDetail}>
            <Text style={styles.label}>Nombre</Text>
            <Text style={styles.value}>{perfil.name}</Text>
          </View>

          <View style={styles.profileDetail}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{perfil.email}</Text>
          </View>

          <View style={styles.profileDetail}>
            <Text style={styles.label}>Teléfono</Text>
            <Text style={styles.value}>{perfil.phone}</Text>
          </View>

          <View style={styles.profileDetail}>
            <Text style={styles.label}>Lugar de Nacimiento</Text>
            <Text style={styles.value}>{perfil.address.city}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    padding: 20,
    flexGrow: 1,
  },
  profileContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileDetail: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
  value: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default PerfilScreen;
