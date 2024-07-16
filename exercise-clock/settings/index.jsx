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
    </Page>
  );
}

registerSettingsPage(Colors);
