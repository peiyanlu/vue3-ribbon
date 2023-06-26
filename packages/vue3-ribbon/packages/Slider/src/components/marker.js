export default {
  name: 'SliderMarker',
  props: {
    mark: {
      type: [String, Object],
    },
  },
  render() {
    const label = typeof this.mark === 'string' ? this.mark : this.mark.label

    return (
      <div class="slider__marks-text" style={this.mark.style || {}}>
        {label}
      </div>
    )
  },
}
