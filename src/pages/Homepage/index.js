import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {
  HeaderHomepage,
  FloatingMenu,
  TitleMenu,
  MenuPromo,
  MenuButtonHomepage,
  Gap,
  Button,
  Saldomenu,
  Buttonmenufloating,
  Imagepromo,
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
  Promo_1,
  Promo_2,
} from '../../assets';

const Homepage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E00120" />
      <HeaderHomepage
        onPressuser={() => navigation.navigate('Login')}
        onPressnotif={() => navigation.navigate('Register')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          {/* Floating menu */}
          <View style={styles.floatMenu}>
            <View style={styles.floatMenuContainer}>
              <Text style={styles.textWelcome}>Selamat Datang, Yayak</Text>
              <Gap height={10} />
              <View style={styles.bodyFloatinmenu}>
                <Saldomenu />
                <View style={styles.btnFloatMenu}>
                  <Buttonmenufloating
                    icon={<IcScanFloat />}
                    label="Scand QR"
                    onPress={() => navigation.navigate('OnDeveloping')}
                  />
                  <Gap width={10} />
                  <Buttonmenufloating
                    icon={<IcTransactionFloat />}
                    label="Transaksi"
                    onPress={() => navigation.navigate('OnDeveloping')}
                  />
                </View>
              </View>
            </View>
          </View>
          <Gap height={15} />

          {/* Menu Promo */}
          <View style={styles.menuPromo}>
            <TitleMenu
              title="Promo & Diskon"
              seeAll={() => {}}
              onPress={() => navigation.navigate('OnDeveloping')}
            />
            <Gap height={20} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Imagepromo img={Promo_1} />
              <Imagepromo img={Promo_1} />
            </ScrollView>
          </View>
          <Gap height={30} />

          {/* E-Wallet */}
          <View style={styles.menu}>
            <TitleMenu
              title="E-Wallet"
              seeAll={() => {}}
              onPress={() => navigation.navigate('OnDeveloping')}
            />
            <View style={styles.listButton}>
              <MenuButtonHomepage
                icon={<IcAddSaldo />}
                label="Tambah Saldo"
                onPress={() => navigation.navigate('OnDeveloping')}
              />
              <MenuButtonHomepage
                icon={<IcLogTransaction />}
                label="Riwayat Transaksi"
                onPress={() => navigation.navigate('OnDeveloping')}
              />
              <MenuButtonHomepage
                icon={<IcTransfer />}
                label="Transfer"
                onPress={() => navigation.navigate('OnDeveloping')}
              />
            </View>
          </View>
          <Gap height={30} />

          {/* Pembayaran */}
          <View style={styles.menu}>
            <TitleMenu
              title="Pembayaran"
              seeAll={() => {}}
              onPress={() => navigation.navigate('OnDeveloping')}
            />
            <View style={styles.listButton}>
              <MenuButtonHomepage
                icon={<IcPayment />}
                label="Pembayaran Kuliah"
                onPress={() => navigation.navigate('Payments_Kuliah')}
              />
              <MenuButtonHomepage
                icon={<IcBill />}
                label="Tagihan & Pascabayar"
                onPress={() => navigation.navigate('OnDeveloping')}
              />
              <MenuButtonHomepage
                icon={<IcRefillable />}
                label="Isi Ulang Pulsa"
                onPress={() => navigation.navigate('OnDeveloping')}
              />
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
  bodyFloatinmenu: {
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
