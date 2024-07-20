function Colors(props) {
  console.log("Settings:")
  console.log("Props:", JSON.stringify(props))
  console.log("Message:", props.settings.message)
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
        <Text bold align="center">Message 1: {props.settings.message1}</Text>
      </Section>
      <Section
        title={<Text bold align="center">Settings 3</Text>}>
        <Text bold align="center">Message 2: {props.settings.message2}</Text>
      </Section>
    </Page>
  );
}

registerSettingsPage(Colors);
