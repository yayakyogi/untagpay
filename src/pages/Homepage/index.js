import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  HeaderHomepage,
  FloatingMenu,
  TitleMenu,
  MenuPromo,
  MenuButton,
  Gap,
  Button,
  Saldomenu,
  Buttonmenu,
} from '../../components';
import {
  IcAddSaldo,
  IcLogTransaction,
  IcTransfer,
  IcPayment,
  IcBill,
  IcRefillable,
  IcGoride,
  IcGodelivery,
  IcScanFloat,
  IcTransactionFloat,
} from '../../assets';

const Homepage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderHomepage />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View style={styles.floatMenu}>
            <View style={styles.floatMenuContainer}>
              <Text style={styles.textWelcome}>Selamat Datang, Yayak</Text>
              <Gap height={10} />
              <View style={styles.menu}>
                <Saldomenu />
                <View style={styles.btnFloatMenu}>
                  <Buttonmenu
                    icon={<IcScanFloat />}
                    label="Scand QR"
                    onPress={({OnPress}) => navigation.navigate('Login')}
                  />
                  <Gap width={10} />
                  <Buttonmenu
                    icon={<IcTransactionFloat />}
                    label="Transaksi"
                    onPress={({OnPress}) => navigation.navigate('Register')}
                  />
                </View>
              </View>
            </View>
          </View>
          <Gap height={15} />
          <View style={styles.menuPromo}>
            <MenuPromo />
          </View>
          <Gap height={30} />
          {/* E-Wallet */}
          <View style={styles.menu}>
            <TitleMenu
              title="E-Wallet"
              seeAll={() => {}}
              onPress={() => navigation.replace('Login')}
            />
            <View style={styles.listButton}>
              <MenuButton icon={<IcAddSaldo />} label="Tambah Saldo" />
              <MenuButton
                icon={<IcLogTransaction />}
                label="Riwayat Transaksi"
              />
              <MenuButton icon={<IcTransfer />} label="Transfer" />
            </View>
          </View>
          <Gap height={30} />
          {/* Pembayaran */}
          <View style={styles.menu}>
            <TitleMenu title="Pembayaran" seeAll={() => {}} />
            <View style={styles.listButton}>
              <MenuButton icon={<IcPayment />} label="Pembayaran Kuliah" />
              <MenuButton icon={<IcBill />} label="Tagihan & Pascabayar" />
              <MenuButton icon={<IcRefillable />} label="Isi Ulang Pulsa" />
            </View>
          </View>
          <Gap height={30} />
          {/* Treansportasi */}
          <View style={styles.menu}>
            <TitleMenu title="Transportasi" />
            <View style={styles.listButtonTrasportasi}>
              <MenuButton icon={<IcGoride />} label="Go-Ride" />
              <Gap width={50} />
              <MenuButton icon={<IcGodelivery />} label="Go-Delivery" />
            </View>
          </View>
          <Gap height={50} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E00120',
  },
  header: {backgroundColor: '#E00120', height: 70},
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: 80,
  },
  floatMenu: {
    alignItems: 'center',
    width: '100%',
    padding: 20,
    paddingHorizontal: 20,
    marginTop: -70,
  },
  menuPromo: {paddingLeft: 20},
  menu: {paddingLeft: 20},
  listButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginRight: 30,
    marginTop: 20,
  },
  listButtonTrasportasi: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginRight: 30,
    marginTop: 20,
  },
  // Floation Menu
  floatMenuContainer: {
    height: 110,
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: '#D7CDCD',
  },
  textWelcome: {fontFamily: 'Poppins-Medium', fontSize: 14, color: '#E00120'},
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  btnFloatMenu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
