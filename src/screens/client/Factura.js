import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    padding: 20,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  content: {
    fontSize: 12,
    marginBottom: 5,
  },
});

function InvoicePDF({ nombre, apellidos, rfc, correo, razon }) {
  const f = new Date();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.heading}>Factura</Text>
        <View>
          <Text style={styles.content}>Fecha: {f.getDate()} / {f.getMonth() + 1} / {f.getFullYear()}</Text>
          <Text style={styles.content}>Nombre: {nombre} {apellidos}</Text>
          <Text style={styles.content}>RFC: {rfc}</Text>
          <Text style={styles.content}>Correo: {correo}</Text>
          <Text style={styles.content}>Razón social: {razon}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default InvoicePDF;
