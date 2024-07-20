function Colors(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Color Settings</Text>}>
        <ColorSelect
          settingsKey="myColor"
          colors={[
            {color: '#FF0000'},
            {color: '#00FF00'},
            {color: '#0000FF'},
            {color: 'aquamarine'},
            {color: 'deepskyblue'},
            {color: 'plum'}
          ]}
        />
      </Section>
      <Section
        title={<Text bold align="center">Settings 2</Text>}>
      </Section>
      <Section
        title={<Text bold align="center">Settings 3</Text>}>
        <Text bold align="center">Message: {props.settingsStorage.message}</Text>
      </Section>
    </Page>
  );
}

registerSettingsPage(Colors);
