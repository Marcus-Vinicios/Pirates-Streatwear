import themes from "."
export default {
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
            color: themes.colors.brand.default,
            fontWeight: 'bold'
        },
        input: {
            borderColor: themes.colors.brand.default,
            padding: 8,
            marginBottom: 8,
            borderBottomWidth: 1,
        },
        label: {
            fontSize: 16,
            marginBottom: 8,
            color: themes.colors.brand.default
        },
        button: {
            backgroundColor: themes.colors.brand.bgbtn,
            borderRadius: 4,
            padding: 16,
            marginVertical: 8,
            ButtonText: {
                color: '#F8F8F2',
                fontWeight: 'bold',
                textAlign: 'center'
            }
        }
    },
    home: {
        container: {
            backgroundColor: '#4d4d4d',
            height: '100%',
        },
        header: {
            display: 'flex',
            height: '12%',
            backgroundColor: themes.colors.neutral.background,
            alignItems: 'center',
            flexDirection: 'row',
            padding: 10,
            paddingTop: 20,
            headerTitle:{
                fontSize: 24,
                color: themes.colors.brand.default,
                marginLeft: 65,
                textAlign: 'center',
            }
        },
        content: {
            height: '78%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        menu: {
            display: 'flex',
            height: '10%',
            backgroundColor: themes.colors.neutral.background,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            padding: 10,
            menuTitle:{
                fontSize: 24,
                color: themes.colors.brand.default,
            },
            button: {
                backgroundColor: themes.colors.brand.bgbtn,
                borderRadius: 4,
                padding: 16,
                width: '40%'
            },
            btnTxt: {
                fontSize: 14,
                fontWeight: 'bold',
                textAlign: 'center',
                color: themes.colors.brand.default,
            }
        },
    },
    AddTenis: {
        header: {
            display: 'flex',
            height: '12%',
            backgroundColor: themes.colors.neutral.background,
            alignItems: 'center',
            flexDirection: 'row',
            padding: 10,
            paddingTop: 20,
            headerTitle:{
                fontSize: 24,
                color: themes.colors.brand.default,
                marginLeft: 65,
                textAlign: 'center',
            },
            button: {
                backgroundColor: "#DAA520",
                borderRadius: 100,
                padding: 8,
            }
        },
        container: {
            backgroundColor: "#DAA520",
            alignItems: 'center',
            margin: 15,
            padding: 20,
            borderRadius: 16,
            width: '90%',
        },
        content: {
            height: '90%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        form: {
            width: '100%',
            marginTop: 20,
            formTitle:{
                fontSize: 24,
                color: themes.colors.brand.default,
            },
        },
        input: {
            borderColor: themes.colors.brand.default,
            padding: 8,
            marginBottom: 8,
            borderBottomWidth: 1,
        },
        label: {
            fontSize: 16,
            marginBottom: 8,
            color: themes.colors.brand.default
        },
        button: {
            backgroundColor: themes.colors.brand.bgbtn,
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