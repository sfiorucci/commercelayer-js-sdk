import library from './library'
import BaseClass from '../utils/BaseClass'

export class AttachmentCollection extends BaseClass {
  static className = 'Attachment'
  name: string
  description: string
  url: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  static define() {
    this.attributes(
      'name',
      'description',
      'url',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )
    this.belongsTo('attachable', { polymorphic: true })
  }
}

const Attachment = library.createResource<AttachmentCollection>(
  AttachmentCollection
)

Attachment.afterBuild(function() {
  if (this.attachableId) delete this.attachableId
  if (this.attachableType) delete this.attachableType
})

export default Attachment
