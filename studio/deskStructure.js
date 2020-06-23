import S from '@sanity/desk-tool/structure-builder'
import {
    MdDaskboard,
    mdSettings,
    FaBullhorn,
    FaHome,
} from 'react-icons/fa';

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Customize')
                .icon(FaBullhorn)
                .child(
                    S.editor()
                        .id('config')
                        .schemaType('site-config')
                        .documentId('global-config')
                ),
                S.divider(),
                S.listItem()
                    .title('Home Page')
                    .icon(FaHome)
                    .child(
                        S.editor()
                            .title('Home Page')
                            .id('homePage')
                            .schemaType('homePage')
                            .documentId('homePage')
                    )
        ])

