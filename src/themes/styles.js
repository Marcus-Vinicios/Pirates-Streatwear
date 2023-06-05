import themes from "."
export default {
    header: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: themes.colors.primary,
        padding: 20,
        height: 80,
        headerTitle: {
            fontSize: 24,
            color: themes.colors.default,
            textAlign: 'center',
            marginLeft: 60,
        },
        button: {
            backgroundColor: "#DAA520",
            borderRadius: 100,
            padding: 10,
            width: 40
        }
    },
    login: {
        container: {
            backgroundColor: "#DAA520",
            alignItems: 'center',
            margin: 15,
            padding: 20,
            borderRadius: 16,
            width: '90%',
        },
        form: {
            width: '100%',
            marginTop: 25,
        },
        titulo: {
            fontSize: 24,
            color: themes.colors.default,
            fontWeight: 'bold'
        },
        input: {
            borderColor: themes.colors.default,
            padding: 8,
            marginBottom: 8,
            borderBottomWidth: 1,
        },
        label: {
            fontSize: 16,
            marginBottom: 8,
            color: themes.colors.default
        },
        button: {
            backgroundColor: themes.colors.bgbtn,
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 30,
            width: 200,
            marginHorizontal: '20%',
            marginVertical: 10,
            padding: 12,
            ButtonText: {
                color: '#F8F8F2',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 20,
            }
        }
    },
    home: {
        container: {
            backgroundColor: '#4d4d4d',
            height: '100%',
        },
        content: {
            height: '78%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
        },
        menu: {
            display: 'flex',
            height: '10%',
            backgroundColor: themes.colors.primary,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            padding: 10,
            menuTitle: {
                fontSize: 24,
                color: themes.colors.default,
            },
            button: {
                backgroundColor: themes.colors.secondary,
                borderRadius: 4,
                padding: 16,
                width: '40%'
            },
            btnTxt: {
                fontSize: 14,
                fontWeight: 'bold',
                textAlign: 'center',
                color: themes.colors.default,
            }
        },
        editBtn: {
            position: 'absolute',
            right: 10,
        },
        delBtn: {
            position: 'absolute',
            left: 10,
        }
    },
    AddTenis: {
        container: {
            backgroundColor: "#DAA520",
            alignItems: 'center',
            margin: 15,
            padding: 20,
            borderRadius: 16,
            width: '100%',
        },
        content: {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
        },
        form: {
            width: '100%',
            formTitle: {
                fontSize: 24,
                color: themes.colors.default,
            },
        },
        input: {
            borderColor: themes.colors.default,
            padding: 8,
            marginBottom: 8,
            borderBottomWidth: 1,
        },
        label: {
            fontSize: 16,
            marginBottom: 8,
            color: themes.colors.default
        },
        button: {
            backgroundColor: themes.colors.bgbtn,
            borderRadius: 4,
            padding: 12,
            width: '30%'
        },
        btnText: {
            color: '#FFFFFF',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 20,
        },
    }
}