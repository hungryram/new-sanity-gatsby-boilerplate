
// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'
import { AiOutlineUser } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'

export default () =>
    S.list()
        .title('Admin')
        .items(
            [
                S.listItem()
                    .title('Profile')
                    .icon(AiOutlineUser)
                    .child(
                        S.document()
                            .title('My Profile')
                            .schemaType('profileSettings')
                            .documentId('profileSettings')
                    ),
                S.listItem()
                    .title('Appearance')
                    .icon(BsPencil)
                    .child(
                        S.document()
                            .title('Appearance')
                            .schemaType('appearances')
                            .documentId('appearances')
                    ),
                S.divider(),
                ...S.documentTypeListItems().filter(item => !['profileSettings', 'appearances'].includes(item.getId()))
            ]
        )