import React, { memo, useState } from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { buttons, buttons1, career, description, health, personality, tableData } from '../utils/string';

const Kundali = () => {
    const [cardPressed, setCardPressed] = useState('0');
    const [cardPressedAbove, setCardPressedAbove] = useState('0');

    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.cellText}>{item.Planet}</Text>
            <Text style={styles.cellText}>{item.Sign}</Text>
            <Text style={styles.cellText}>{item.SignLord}</Text>
            <Text style={styles.cellText}>{item.Degree}</Text>
            <Text style={styles.cellText}>{item.House}</Text>
        </View>
    );

    const renderHeader = () => (
        <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Planet</Text>
            <Text style={styles.headerText}>Sign</Text>
            <Text style={styles.headerText}>SignLord</Text>
            <Text style={styles.headerText}>Degree</Text>
            <Text style={styles.headerText}>House</Text>
        </View>
    );

    function renderCards(item, index) {
        return (
            index == cardPressed ?
                <TouchableOpacity style={{ marginRight: 10 }} onPress={() => setCardPressed(index)}>
                    <LinearGradient
                        colors={['#70E1F5', '#FFD194']}
                        start={{x: 0, y: 0.5}}
                        end={{x: 1, y: 0.5}}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>{item.button}</Text>
                    </LinearGradient>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={[styles.button, { marginRight: 10 }]}
                    key={index}
                    onPress={() => {
                        setCardPressed(index);
                    }}>
                    <Text style={styles.buttonText}>{item.button}</Text>
                </TouchableOpacity>

        );
    }

    function renderCards1(item, index) {
        return (
            index == cardPressedAbove ?
                <TouchableOpacity
                    style={{ marginRight: 10 }}
                    onPress={() => setCardPressedAbove(index)}>
                    <LinearGradient
                        colors={['#70E1F5', '#FFD194']}
                        style={styles.button}
                        start={{x: 0, y: 0.5}}
                        end={{x: 1, y: 0.5}}
                    >
                        <Text style={styles.buttonText}>{item.button}</Text>
                    </LinearGradient>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={[styles.button, { marginRight: 10 }]}
                    key={index}
                    onPress={() => {
                        setCardPressedAbove(index);
                    }}>
                    <Text style={styles.buttonText}>{item.button}</Text>
                </TouchableOpacity>

        );
    }

    function RenderDescCards({ titleText, desctext }) {
        return (
            <View style={styles.renderDescCardsView}>
                <Text style={styles.renderDescCardsHeading}>{titleText}</Text>
                <Text style={styles.renderDescCardsText}>{desctext}</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <View style={styles.kundaliImSign}>
                        <Image source={require('../Images/PNG/kundali.png')} />
                    </View>
                    <View style={{ marginTop: '3%' }}>
                        <Text style={styles.poppinsRegular}>Planets</Text>
                    </View>

                    <View
                        style={styles.flatListView}>
                        <FlatList
                            horizontal={true}
                            data={buttons1}
                            showsHorizontalScrollIndicator={true}
                            renderItem={
                                ({ item, index }) => renderCards1(item, index)
                            }
                            KeyExtractor={(item, index) => {
                                return index;
                            }}
                        />

                    </View>
                    <View style={[styles.table, { marginTop: '5%' }]}>

                        <FlatList
                            ListHeaderComponent={renderHeader}
                            data={tableData}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                        />

                    </View>
                    <View style={{ marginTop: '3%' }}>
                        <Text style={styles.poppinsRegular}>UnderStanding Your Kundli</Text>
                    </View>
                    <View
                        style={[styles.flatListView, { marginBottom: '2%' }]}>
                        <FlatList
                            horizontal={true}
                            data={buttons}
                            showsHorizontalScrollIndicator={true}
                            renderItem={
                                ({ item, index }) => renderCards(item, index)
                            }
                            KeyExtractor={(item, index) => {
                                return index;
                            }}
                        />
                    </View>

                    <RenderDescCards titleText={description.title} desctext={description.text} />
                    <RenderDescCards titleText={personality.title} desctext={personality.text} />
                    <RenderDescCards titleText={career.title} desctext={career.text} />
                    <RenderDescCards titleText={health.title} desctext={health.text} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C281C',
        paddingHorizontal: '4%'
    },
    kundaliImSign: {
        alignItems: 'center',
        marginTop: '3%',
        resizeMode: 'stretch'
    },
    poppinsRegular: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        color: 'white'
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#FFF',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    table: {
        borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'transparent',
        marginBottom: '3%',
        borderRadius: 10,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#414a41',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    headerText: {
        flex: 1,
        padding: 8,
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Poppins-Bold',
        color: '#ffffff'
    },
    cellText: {
        flex: 1,
        padding: 8,
        textAlign: 'center',
        backgroundColor: '#2d362d',
        color: '#ffffff',
        fontSize: 12,
        fontFamily: 'Poppins-Light',
    },
    row: {
        flexDirection: 'row',
    },
    renderDescCardsView: {
        marginTop: '3%',
        backgroundColor: '#414a41',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10
    },
    renderDescCardsHeading: {
        fontFamily: 'Poppins-Light',
        fontSize: 17,
        color: '#ffffff'
    },
    renderDescCardsText: {
        fontFamily: 'Poppins-Light',
        fontSize: 13, color: '#ffffff',
        overflow: 'hidden'
    },
    flatListView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        alignSelf: 'center',
        marginTop: '3%'
    }
})
export default Kundali;